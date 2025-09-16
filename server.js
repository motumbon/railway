const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.'));

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PERSONAL_NOTES_FILE = path.join(DATA_DIR, 'personalNotes.json');
const SHARED_NOTES_FILE = path.join(DATA_DIR, 'sharedNotes.json');
const ACTIVITIES_FILE = path.join(DATA_DIR, 'activities.json');
const COMPLETED_ACTIVITIES_FILE = path.join(DATA_DIR, 'completedActivities.json');
const NOTIFICATIONS_FILE = path.join(DATA_DIR, 'notifications.json');
const NAMES_FILE = path.join(DATA_DIR, 'names.json');
const INSTITUTIONS_FILE = path.join(DATA_DIR, 'institutions.json');
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json');
const COMPLETED_TASKS_FILE = path.join(DATA_DIR, 'completedTasks.json');

// Initialize data directory and files
async function initializeDataFiles() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        
        const files = [
            { path: USERS_FILE, default: {} },
            { path: PERSONAL_NOTES_FILE, default: {} },
            { path: SHARED_NOTES_FILE, default: [] },
            { path: ACTIVITIES_FILE, default: {} },
            { path: COMPLETED_ACTIVITIES_FILE, default: {} },
            { path: NOTIFICATIONS_FILE, default: {} },
            { path: NAMES_FILE, default: {} },
            { path: INSTITUTIONS_FILE, default: {} },
            { path: TASKS_FILE, default: {} },
            { path: COMPLETED_TASKS_FILE, default: {} }
        ];

        for (const file of files) {
            try {
                await fs.access(file.path);
            } catch {
                await fs.writeFile(file.path, JSON.stringify(file.default, null, 2));
            }
        }
    } catch (error) {
        console.error('Error initializing data files:', error);
    }
}

// Utility functions
async function readDataFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return {};
    }
}

async function writeDataFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error);
        return false;
    }
}

// JWT middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// Authentication endpoints
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        const users = await readDataFile(USERS_FILE);
        
        // Check if user already exists
        if (users[username]) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Check if email already exists
        const existingUser = Object.values(users).find(user => user.email === email);
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            username,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        users[username] = newUser;
        await writeDataFile(USERS_FILE, users);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const users = await readDataFile(USERS_FILE);
        
        // Find user by username or email
        let user = users[username];
        if (!user) {
            user = Object.values(users).find(u => u.email === username);
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User data endpoints
app.get('/api/user/profile', authenticateToken, async (req, res) => {
    try {
        const users = await readDataFile(USERS_FILE);
        const user = users[req.user.username];
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const { password, ...userProfile } = user;
        res.json(userProfile);
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/user/profile', authenticateToken, async (req, res) => {
    try {
        const users = await readDataFile(USERS_FILE);
        const user = users[req.user.username];
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user profile
        const updatedUser = {
            ...user,
            ...req.body,
            username: user.username, // Prevent username change
            password: user.password, // Prevent password change via this endpoint
            updatedAt: new Date().toISOString()
        };

        users[req.user.username] = updatedUser;
        await writeDataFile(USERS_FILE, users);

        const { password, ...userProfile } = updatedUser;
        res.json(userProfile);
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Personal Notes endpoints
app.get('/api/notes/personal', authenticateToken, async (req, res) => {
    try {
        const personalNotes = await readDataFile(PERSONAL_NOTES_FILE);
        res.json(personalNotes[req.user.username] || []);
    } catch (error) {
        console.error('Personal notes fetch error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/notes/personal', authenticateToken, async (req, res) => {
    try {
        const personalNotes = await readDataFile(PERSONAL_NOTES_FILE);
        
        if (!personalNotes[req.user.username]) {
            personalNotes[req.user.username] = [];
        }

        const newNote = {
            id: Date.now().toString(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        personalNotes[req.user.username].push(newNote);
        await writeDataFile(PERSONAL_NOTES_FILE, personalNotes);

        res.status(201).json(newNote);
    } catch (error) {
        console.error('Personal note creation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/notes/personal/:id', authenticateToken, async (req, res) => {
    try {
        const personalNotes = await readDataFile(PERSONAL_NOTES_FILE);
        const userNotes = personalNotes[req.user.username] || [];
        
        const noteIndex = userNotes.findIndex(note => note.id === req.params.id);
        if (noteIndex === -1) {
            return res.status(404).json({ error: 'Note not found' });
        }

        const updatedNote = {
            ...userNotes[noteIndex],
            ...req.body,
            id: req.params.id,
            updatedAt: new Date().toISOString()
        };

        userNotes[noteIndex] = updatedNote;
        personalNotes[req.user.username] = userNotes;
        await writeDataFile(PERSONAL_NOTES_FILE, personalNotes);

        res.json(updatedNote);
    } catch (error) {
        console.error('Personal note update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/notes/personal/:id', authenticateToken, async (req, res) => {
    try {
        const personalNotes = await readDataFile(PERSONAL_NOTES_FILE);
        const userNotes = personalNotes[req.user.username] || [];
        
        const noteIndex = userNotes.findIndex(note => note.id === req.params.id);
        if (noteIndex === -1) {
            return res.status(404).json({ error: 'Note not found' });
        }

        userNotes.splice(noteIndex, 1);
        personalNotes[req.user.username] = userNotes;
        await writeDataFile(PERSONAL_NOTES_FILE, personalNotes);

        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error('Personal note deletion error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Shared Notes endpoints
app.get('/api/notes/shared', authenticateToken, async (req, res) => {
    try {
        const sharedNotes = await readDataFile(SHARED_NOTES_FILE);
        const userSharedNotes = sharedNotes.filter(note => 
            note.participants && note.participants.includes(req.user.username)
        );
        res.json(userSharedNotes);
    } catch (error) {
        console.error('Shared notes fetch error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/notes/shared', authenticateToken, async (req, res) => {
    try {
        const { shareWithUser, ...noteData } = req.body;
        
        // Verify target user exists
        const users = await readDataFile(USERS_FILE);
        const targetUser = users[shareWithUser] || Object.values(users).find(u => u.email === shareWithUser);
        
        if (!targetUser) {
            return res.status(404).json({ error: 'Target user not found' });
        }

        const sharedNotes = await readDataFile(SHARED_NOTES_FILE);
        
        const newSharedNote = {
            id: Date.now().toString(),
            ...noteData,
            sharedBy: req.user.username,
            sharedWith: targetUser.username,
            participants: [req.user.username, targetUser.username],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            sharedAt: new Date().toISOString()
        };

        sharedNotes.push(newSharedNote);
        await writeDataFile(SHARED_NOTES_FILE, sharedNotes);

        res.status(201).json(newSharedNote);
    } catch (error) {
        console.error('Shared note creation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/notes/shared/:id', authenticateToken, async (req, res) => {
    try {
        const sharedNotes = await readDataFile(SHARED_NOTES_FILE);
        const noteIndex = sharedNotes.findIndex(note => note.id === req.params.id);
        
        if (noteIndex === -1) {
            return res.status(404).json({ error: 'Shared note not found' });
        }

        const note = sharedNotes[noteIndex];
        
        // Check if user is a participant
        if (!note.participants.includes(req.user.username)) {
            return res.status(403).json({ error: 'Not authorized to edit this note' });
        }

        const updatedNote = {
            ...note,
            ...req.body,
            id: req.params.id,
            participants: note.participants, // Preserve participants
            updatedAt: new Date().toISOString(),
            lastEditedBy: req.user.username
        };

        sharedNotes[noteIndex] = updatedNote;
        await writeDataFile(SHARED_NOTES_FILE, sharedNotes);

        res.json(updatedNote);
    } catch (error) {
        console.error('Shared note update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/notes/shared/:id', authenticateToken, async (req, res) => {
    try {
        const sharedNotes = await readDataFile(SHARED_NOTES_FILE);
        const noteIndex = sharedNotes.findIndex(note => note.id === req.params.id);
        
        if (noteIndex === -1) {
            return res.status(404).json({ error: 'Shared note not found' });
        }

        const note = sharedNotes[noteIndex];
        
        // Check if user is a participant
        if (!note.participants.includes(req.user.username)) {
            return res.status(403).json({ error: 'Not authorized to delete this note' });
        }

        sharedNotes.splice(noteIndex, 1);
        await writeDataFile(SHARED_NOTES_FILE, sharedNotes);

        res.json({ message: 'Shared note deleted successfully' });
    } catch (error) {
        console.error('Shared note deletion error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Activities endpoints
app.get('/api/activities', authenticateToken, async (req, res) => {
    try {
        const activities = await readDataFile(ACTIVITIES_FILE);
        res.json(activities[req.user.username] || {});
    } catch (error) {
        console.error('Activities fetch error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/activities', authenticateToken, async (req, res) => {
    try {
        const activities = await readDataFile(ACTIVITIES_FILE);
        
        if (!activities[req.user.username]) {
            activities[req.user.username] = {};
        }

        const newActivity = {
            id: Date.now().toString(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // Store activity in nested structure by name and institution
        const { name, institution } = req.body;
        if (!activities[req.user.username][name]) {
            activities[req.user.username][name] = {};
        }
        if (!activities[req.user.username][name][institution]) {
            activities[req.user.username][name][institution] = [];
        }

        activities[req.user.username][name][institution].push(newActivity);
        await writeDataFile(ACTIVITIES_FILE, activities);

        res.status(201).json(newActivity);
    } catch (error) {
        console.error('Activity creation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize and start server
async function startServer() {
    await initializeDataFiles();
    
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log('Data directory:', DATA_DIR);
    });
}

startServer().catch(console.error);
