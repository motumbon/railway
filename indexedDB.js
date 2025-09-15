// IndexedDB wrapper for better data persistence
class AppDatabase {
    constructor() {
        this.dbName = 'AppSeguimientoDB';
        this.dbVersion = 1;
        this.db = null;
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create object stores
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'username' });
                }
                if (!db.objectStoreNames.contains('personalNotes')) {
                    db.createObjectStore('personalNotes', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('sharedNotes')) {
                    db.createObjectStore('sharedNotes', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('activities')) {
                    db.createObjectStore('activities', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('tasks')) {
                    db.createObjectStore('tasks', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }
            };
        });
    }

    async saveData(storeName, data) {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(data);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    async getData(storeName, key) {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(key);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    async getAllData(storeName) {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    async deleteData(storeName, key) {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(key);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    // Migration function to move localStorage data to IndexedDB
    async migrateFromLocalStorage() {
        try {
            // Migrate users
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            for (const user of users) {
                await this.saveData('users', user);
            }

            // Migrate personal notes
            const personalNotes = JSON.parse(localStorage.getItem('personalNotes') || '{}');
            for (const [username, notes] of Object.entries(personalNotes)) {
                for (const note of notes) {
                    await this.saveData('personalNotes', { ...note, username });
                }
            }

            // Migrate shared notes
            const sharedNotes = JSON.parse(localStorage.getItem('sharedNotesStorage') || '[]');
            for (const note of sharedNotes) {
                await this.saveData('sharedNotes', note);
            }

            // Migrate activities
            const activities = JSON.parse(localStorage.getItem('activities') || '{}');
            for (const [username, userActivities] of Object.entries(activities)) {
                for (const activity of userActivities) {
                    await this.saveData('activities', { ...activity, username });
                }
            }

            // Save migration flag
            await this.saveData('settings', { key: 'migrated', value: true, date: new Date().toISOString() });
            
            console.log('Data migration from localStorage to IndexedDB completed');
        } catch (error) {
            console.error('Migration error:', error);
        }
    }

    // Check if migration has been done
    async isMigrated() {
        try {
            const migrationFlag = await this.getData('settings', 'migrated');
            return !!migrationFlag;
        } catch (error) {
            return false;
        }
    }
}

// Global database instance
const appDB = new AppDatabase();

// Enhanced storage functions with IndexedDB fallback
async function saveToStorageEnhanced(key, data) {
    try {
        // Try IndexedDB first
        if (key === 'users') {
            if (Array.isArray(data)) {
                for (const user of data) {
                    await appDB.saveData('users', user);
                }
            }
        } else if (key === 'personalNotes') {
            // Handle personal notes structure
            for (const [username, notes] of Object.entries(data)) {
                for (const note of notes) {
                    await appDB.saveData('personalNotes', { ...note, username });
                }
            }
        } else if (key === 'sharedNotesStorage') {
            if (Array.isArray(data)) {
                for (const note of data) {
                    await appDB.saveData('sharedNotes', note);
                }
            }
        }
        
        // Also save to localStorage as backup
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.warn('IndexedDB save failed, using localStorage:', error);
        localStorage.setItem(key, JSON.stringify(data));
    }
}

async function loadFromStorageEnhanced(key) {
    try {
        // Try IndexedDB first
        if (key === 'users') {
            const users = await appDB.getAllData('users');
            if (users && users.length > 0) {
                return users;
            }
        } else if (key === 'personalNotes') {
            const notes = await appDB.getAllData('personalNotes');
            if (notes && notes.length > 0) {
                // Reconstruct the structure expected by the app
                const personalNotes = {};
                for (const note of notes) {
                    if (!personalNotes[note.username]) {
                        personalNotes[note.username] = [];
                    }
                    const { username, ...noteData } = note;
                    personalNotes[note.username].push(noteData);
                }
                return personalNotes;
            }
        } else if (key === 'sharedNotesStorage') {
            const sharedNotes = await appDB.getAllData('sharedNotes');
            if (sharedNotes && sharedNotes.length > 0) {
                return sharedNotes;
            }
        }
        
        // Fallback to localStorage
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.warn('IndexedDB load failed, using localStorage:', error);
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}

// Initialize database and perform migration if needed
async function initializeDatabase() {
    try {
        await appDB.init();
        
        // Check if we need to migrate from localStorage
        const migrated = await appDB.isMigrated();
        if (!migrated) {
            await appDB.migrateFromLocalStorage();
        }
    } catch (error) {
        console.warn('IndexedDB initialization failed, using localStorage only:', error);
    }
}

// Initialize when the script loads
initializeDatabase();
