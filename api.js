// API Configuration and Utilities
const API_BASE_URL = window.location.origin;
let authToken = localStorage.getItem('authToken');

// Check if we're running with backend support
function hasBackendSupport() {
    // Always return true for Railway deployment
    // Railway serves the app from the same domain as the API
    return window.location.protocol !== 'file:';
}

// API utility functions
async function apiRequest(endpoint, options = {}) {
    // If no backend support, throw error to trigger fallback
    if (!hasBackendSupport()) {
        throw new Error('No backend available - using localStorage fallback');
    }

    const url = `${API_BASE_URL}/api${endpoint}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    // Add auth token if available
    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`;
    }

    try {
        const response = await fetch(url, config);
        
        if (response.status === 401) {
            // Token expired or invalid - but not for login/register endpoints
            if (!endpoint.includes('/login') && !endpoint.includes('/register')) {
                authToken = null;
                localStorage.removeItem('authToken');
                showLogin();
                throw new Error('Authentication required');
            }
        }

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'API request failed');
        }

        return await response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
}

// Authentication API with localStorage fallback
async function apiLogin(username, password) {
    try {
        console.log('🔄 Attempting server login for:', username);
        const response = await apiRequest('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        });
        
        console.log('✅ Server login successful:', response);
        authToken = response.token;
        localStorage.setItem('authToken', authToken);
        return response;
    } catch (error) {
        console.log('❌ Server login failed, using localStorage fallback:', error.message);
        // Fallback to localStorage authentication
        return loginWithLocalStorage(username, password);
    }
}

async function apiRegister(username, email, password) {
    try {
        console.log('🔄 Attempting server registration for:', username);
        const result = await apiRequest('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        });
        console.log('✅ Server registration successful:', result);
        return result;
    } catch (error) {
        console.log('❌ Server registration failed, using localStorage fallback:', error.message);
        // Fallback to localStorage registration
        return registerWithLocalStorage(username, email, password);
    }
}

// LocalStorage fallback functions
async function loginWithLocalStorage(username, password) {
    // Use enhanced storage functions
    const users = await loadFromStorageEnhanced('users') || [];
    
    // Debug: Log what we're looking for and what we have
    console.log('Login attempt:', { username, password });
    console.log('Stored users:', users);
    
    // Try to find user by username OR email
    const user = users.find(u => 
        (u.username === username || u.email === username) && u.password === password
    );
    
    console.log('Found user:', user);
    
    if (!user) {
        throw new Error('Invalid credentials');
    }
    
    // Simulate token for consistency
    authToken = 'localStorage_token_' + Date.now();
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('currentUser', user.username);
    
    return { user, token: authToken };
}

async function registerWithLocalStorage(username, email, password) {
    // Use enhanced storage functions
    const users = await loadFromStorageEnhanced('users') || [];
    
    // Check if user already exists
    if (users.find(u => u.username === username || u.email === email)) {
        throw new Error('El usuario o email ya existe');
    }
    
    // Create new user
    const newUser = {
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
        confirmedAt: new Date().toISOString(),
        firstName: '',
        lastName: '',
        position: '',
        phone: ''
    };
    
    users.push(newUser);
    await saveToStorageEnhanced('users', users);
    
    return { message: 'User registered successfully' };
}

// User Profile API
async function apiGetProfile() {
    return await apiRequest('/user/profile');
}

async function apiUpdateProfile(profileData) {
    return await apiRequest('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
    });
}

// Personal Notes API with localStorage fallback
async function apiGetPersonalNotes() {
    try {
        return await apiRequest('/notes/personal');
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) return [];
        
        const personalNotes = JSON.parse(localStorage.getItem('personalNotes') || '{}');
        return personalNotes[currentUser] || [];
    }
}

async function apiCreatePersonalNote(noteData) {
    try {
        return await apiRequest('/notes/personal', {
            method: 'POST',
            body: JSON.stringify(noteData)
        });
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) throw new Error('No user logged in');
        
        const personalNotes = JSON.parse(localStorage.getItem('personalNotes') || '{}');
        if (!personalNotes[currentUser]) personalNotes[currentUser] = [];
        
        const newNote = {
            id: Date.now().toString(),
            ...noteData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        personalNotes[currentUser].push(newNote);
        localStorage.setItem('personalNotes', JSON.stringify(personalNotes));
        return newNote;
    }
}

async function apiUpdatePersonalNote(noteId, noteData) {
    try {
        return await apiRequest(`/notes/personal/${noteId}`, {
            method: 'PUT',
            body: JSON.stringify(noteData)
        });
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) throw new Error('No user logged in');
        
        const personalNotes = JSON.parse(localStorage.getItem('personalNotes') || '{}');
        if (!personalNotes[currentUser]) throw new Error('Note not found');
        
        const noteIndex = personalNotes[currentUser].findIndex(note => note.id === noteId);
        if (noteIndex === -1) throw new Error('Note not found');
        
        personalNotes[currentUser][noteIndex] = {
            ...personalNotes[currentUser][noteIndex],
            ...noteData,
            updatedAt: new Date().toISOString()
        };
        
        localStorage.setItem('personalNotes', JSON.stringify(personalNotes));
        return personalNotes[currentUser][noteIndex];
    }
}

async function apiDeletePersonalNote(noteId) {
    try {
        return await apiRequest(`/notes/personal/${noteId}`, {
            method: 'DELETE'
        });
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) throw new Error('No user logged in');
        
        const personalNotes = JSON.parse(localStorage.getItem('personalNotes') || '{}');
        if (!personalNotes[currentUser]) throw new Error('Note not found');
        
        personalNotes[currentUser] = personalNotes[currentUser].filter(note => note.id !== noteId);
        localStorage.setItem('personalNotes', JSON.stringify(personalNotes));
        return { message: 'Note deleted successfully' };
    }
}

// Shared Notes API with localStorage fallback
async function apiGetSharedNotes() {
    try {
        return await apiRequest('/notes/shared');
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) return [];
        
        const sharedNotes = JSON.parse(localStorage.getItem('sharedNotesStorage') || '[]');
        return sharedNotes.filter(note => 
            note.sharedBy === currentUser || note.sharedWith === currentUser
        );
    }
}

async function apiCreateSharedNote(noteData) {
    try {
        return await apiRequest('/notes/shared', {
            method: 'POST',
            body: JSON.stringify(noteData)
        });
    } catch (error) {
        // Fallback to localStorage
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) throw new Error('No user logged in');
        
        const sharedNotes = JSON.parse(localStorage.getItem('sharedNotesStorage') || '[]');
        
        const newNote = {
            id: Date.now().toString(),
            subject: noteData.subject,
            comments: noteData.comments,
            sharedBy: currentUser,
            sharedWith: noteData.shareWithUser,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        sharedNotes.push(newNote);
        localStorage.setItem('sharedNotesStorage', JSON.stringify(sharedNotes));
        return newNote;
    }
}

async function apiUpdateSharedNote(noteId, noteData) {
    try {
        return await apiRequest(`/notes/shared/${noteId}`, {
            method: 'PUT',
            body: JSON.stringify(noteData)
        });
    } catch (error) {
        // Fallback to localStorage
        const sharedNotes = JSON.parse(localStorage.getItem('sharedNotesStorage') || '[]');
        const noteIndex = sharedNotes.findIndex(note => note.id === noteId);
        
        if (noteIndex === -1) throw new Error('Note not found');
        
        sharedNotes[noteIndex] = {
            ...sharedNotes[noteIndex],
            ...noteData,
            updatedAt: new Date().toISOString()
        };
        
        localStorage.setItem('sharedNotesStorage', JSON.stringify(sharedNotes));
        return sharedNotes[noteIndex];
    }
}

async function apiDeleteSharedNote(noteId) {
    try {
        return await apiRequest(`/notes/shared/${noteId}`, {
            method: 'DELETE'
        });
    } catch (error) {
        // Fallback to localStorage
        const sharedNotes = JSON.parse(localStorage.getItem('sharedNotesStorage') || '[]');
        const filteredNotes = sharedNotes.filter(note => note.id !== noteId);
        
        localStorage.setItem('sharedNotesStorage', JSON.stringify(filteredNotes));
        return { message: 'Shared note deleted successfully' };
    }
}

// Activities API
async function apiGetActivities() {
    return await apiRequest('/activities');
}

async function apiCreateActivity(activityData) {
    return await apiRequest('/activities', {
        method: 'POST',
        body: JSON.stringify(activityData)
    });
}

// Fallback functions for localStorage (backward compatibility)
function saveToStorageAPI(key, data) {
    // This function will be replaced by API calls in the updated script
    console.warn(`saveToStorageAPI called for ${key} - should use API instead`);
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromStorageAPI(key) {
    // This function will be replaced by API calls in the updated script
    console.warn(`loadFromStorageAPI called for ${key} - should use API instead`);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Check if user is authenticated
function isAuthenticated() {
    return !!authToken;
}

// Logout function
function apiLogout() {
    authToken = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
}
