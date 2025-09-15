// Global Variables - Basic declarations first
let users = [];
let pendingUsers = [];
let names = [];
let activities = [];
let completedActivities = [];
let institutions = [];
let activeTasks = [];
let completedTasks = [];
let notifications = [];
let currentUser = null;
let selectedName = null;
let selectedInstitution = null;
let editingActivity = null;
let currentActivity = null;
let selectedCalendarDate = null;
let isSchedulingActivity = false;
let isEditingActivity = false;
let isInlineEditing = false;

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// DOM Elements
const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const dashboardPage = document.getElementById('dashboardPage');
const profilePage = document.getElementById('profilePage');
const emailConfirmationPage = document.getElementById('emailConfirmationPage');
const completedActivitiesPage = document.getElementById('completedActivitiesPage');
const activeTasksPage = document.getElementById('activeTasksPage');
const completedTasksPage = document.getElementById('completedTasksPage');

// Dropdown Elements
const menuDropdownBtn = document.getElementById('menuDropdownBtn');
const menuDropdown = document.getElementById('menuDropdown');
const userDropdownBtn = document.getElementById('userDropdownBtn');
const userDropdown = document.getElementById('userDropdown');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');

const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');

const currentUserSpan = document.getElementById('currentUser');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const backToDashboard = document.getElementById('backToDashboard');

// Completed Activities Elements
const completedActivitiesBtn = document.getElementById('completedActivitiesBtn');
const developmentActivitiesBtn = document.getElementById('developmentActivitiesBtn');
const backToDevelopmentBtn = document.getElementById('backToDevelopmentBtn');
const completedActivitiesDisplay = document.getElementById('completedActivitiesDisplay');
const currentUserCompleted = document.getElementById('currentUserCompleted');

const nameInput = document.getElementById('nameInput');
const addNameBtn = document.getElementById('addNameBtn');
const namesList = document.getElementById('namesList');
const deleteNameBtn = document.getElementById('deleteNameBtn');
const userSuggestions = document.getElementById('userSuggestions');

const selectedPersonTitle = document.getElementById('selectedPersonTitle');
const contentMessage = document.getElementById('contentMessage');
const institutionsContainer = document.getElementById('institutionsContainer');
const institutionsList = document.getElementById('institutionsList');
const addInstitutionBtn = document.getElementById('addInstitutionBtn');
const institutionMenuBtn = document.getElementById('institutionMenuBtn');
const institutionDropdown = document.getElementById('institutionDropdown');
const addActivityBtn = document.getElementById('addActivityBtn');
const addActivityBtn2 = document.getElementById('addActivityBtn2');
const activityButtonContainer = document.getElementById('activityButtonContainer');
const activitiesContainer = document.getElementById('activitiesContainer');
const completedActivitiesList = document.getElementById('completedActivitiesList');
const scheduledActivitiesList = document.getElementById('scheduledActivitiesList');

// Calendar elements
const calendarContainer = document.getElementById('calendarContainer');
const calendarTitle = document.getElementById('calendarTitle');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const calendarDays = document.getElementById('calendarDays');
const calendarActivitiesModal = document.getElementById('calendarActivitiesModal');
const calendarActivitiesTitle = document.getElementById('calendarActivitiesTitle');
const calendarActivitiesList = document.getElementById('calendarActivitiesList');
const closeCalendarActivitiesBtn = document.getElementById('closeCalendarActivitiesBtn');
const scheduleActivityBtn = document.getElementById('scheduleActivityBtn');

// Scheduling elements
const schedulingFields = document.getElementById('schedulingFields');
const activityDate = document.getElementById('activityDate');
const activityHour = document.getElementById('activityHour');
const activityMinute = document.getElementById('activityMinute');

// Profile elements
const profileForm = document.getElementById('profileForm');
const profilePhoto = document.getElementById('profilePhoto');
const photoInput = document.getElementById('photoInput');
const changePhotoBtn = document.getElementById('changePhotoBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');
const profileSuccess = document.getElementById('profileSuccess');
const profileError = document.getElementById('profileError');

// Modal elements
const confirmModal = document.getElementById('confirmModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

// Email confirmation elements
const confirmationEmail = document.getElementById('confirmationEmail');
const emailTo = document.getElementById('emailTo');
const emailUsername = document.getElementById('emailUsername');
const confirmAccountBtn = document.getElementById('confirmAccountBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');
const resendEmailBtn = document.getElementById('resendEmailBtn');

// Activity modal elements
const activityModal = document.getElementById('activityModal');
const activityForm = document.getElementById('activityForm');
const activityModalTitle = document.getElementById('activityModalTitle');
const activitySubject = document.getElementById('activitySubject');
const activityPersonName = document.getElementById('activityPersonName');
const activityInstitution = document.getElementById('activityInstitution');
const activityComments = document.getElementById('activityComments');
const activitySubjectCounter = document.getElementById('subjectCounter');
const commentsCounter = document.getElementById('commentsCounter');
const confirmActivityBtn = document.getElementById('confirmActivityBtn');
const cancelActivityBtn = document.getElementById('cancelActivityBtn');
const shareActivityCheckbox = document.getElementById('shareActivity');
const shareActivityNote = document.getElementById('shareActivityNote');

// Activity detail modal elements
const activityDetailModal = document.getElementById('activityDetailModal');
const activityDetailTitle = document.getElementById('activityDetailTitle');
const activityDetailDate = document.getElementById('activityDetailDate');
const activityDetailSubject = document.getElementById('activityDetailSubject');
const activityDetailComments = document.getElementById('activityDetailComments');
const editActivityBtn = document.getElementById('editActivityBtn');
const deleteActivityBtn = document.getElementById('deleteActivityBtn');
const closeDetailBtn = document.getElementById('closeDetailBtn');
const sharedByNote = document.getElementById('sharedByNote');
const sharedByUser = document.getElementById('sharedByUser');

// Notifications elements
const notificationsBtn = document.getElementById('notificationsBtn');
const notificationCount = document.getElementById('notificationCount');
const notificationsDropdown = document.getElementById('notificationsDropdown');
const notificationsList = document.getElementById('notificationsList');
const clearAllNotifications = document.getElementById('clearAllNotifications');

// Activity delete modal elements
const deleteActivityModal = document.getElementById('deleteActivityModal');
const confirmDeleteActivityBtn = document.getElementById('confirmDeleteActivityBtn');
const cancelDeleteActivityBtn = document.getElementById('cancelDeleteActivityBtn');

// Institution modal elements
const institutionModal = document.getElementById('institutionModal');
const institutionForm = document.getElementById('institutionForm');
const institutionName = document.getElementById('institutionName');
const confirmInstitutionBtn = document.getElementById('confirmInstitutionBtn');
const cancelInstitutionBtn = document.getElementById('cancelInstitutionBtn');
const deleteInstitutionBtn = document.getElementById('deleteInstitutionBtn');
const deleteInstitutionModal = document.getElementById('deleteInstitutionModal');
const confirmDeleteInstitutionBtn = document.getElementById('confirmDeleteInstitutionBtn');
const cancelDeleteInstitutionBtn = document.getElementById('cancelDeleteInstitutionBtn');

// Options dropdown elements
const optionsDropdown = document.getElementById('optionsDropdown');
const optionsBtn = document.getElementById('optionsBtn');
const optionsMenu = document.getElementById('optionsMenu');
const exportOption = document.getElementById('exportOption');
const sortOption = document.getElementById('sortOption');
const showOption = document.getElementById('showOption');

// Completed activities options dropdown elements
const optionsDropdownCompleted = document.getElementById('optionsDropdownCompleted');
const optionsBtnCompleted = document.getElementById('optionsBtnCompleted');
const optionsMenuCompleted = document.getElementById('optionsMenuCompleted');
const exportOptionCompleted = document.getElementById('exportOptionCompleted');
const sortOptionCompleted = document.getElementById('sortOptionCompleted');
const showOptionCompleted = document.getElementById('showOptionCompleted');

// Pagination DOM elements
const completedPagination = document.getElementById('completedPagination');
const prevCompletedBtn = document.getElementById('prevCompletedBtn');
const nextCompletedBtn = document.getElementById('nextCompletedBtn');
const completedPageInfo = document.getElementById('completedPageInfo');

const scheduledPagination = document.getElementById('scheduledPagination');
const prevScheduledBtn = document.getElementById('prevScheduledBtn');
const nextScheduledBtn = document.getElementById('nextScheduledBtn');
const scheduledPageInfo = document.getElementById('scheduledPageInfo');

const completedActivitiesPagination = document.getElementById('completedActivitiesPagination');
const prevCompletedActivitiesBtn = document.getElementById('prevCompletedActivitiesBtn');
const nextCompletedActivitiesBtn = document.getElementById('nextCompletedActivitiesBtn');
const completedActivitiesPageInfo = document.getElementById('completedActivitiesPageInfo');

// Bulk actions DOM elements
const bulkActions = document.querySelector('.bulk-actions');
const selectAllCompletedBtn = document.getElementById('selectAllCompletedBtn');
const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');

// Bulk delete modal elements
const bulkDeleteModal = document.getElementById('bulkDeleteModal');
const bulkDeleteMessage = document.getElementById('bulkDeleteMessage');
const confirmBulkDeleteBtn = document.getElementById('confirmBulkDeleteBtn');
const cancelBulkDeleteBtn = document.getElementById('cancelBulkDeleteBtn');

// Current filter values
let currentSortFilter = 'activityDate';
let currentPeriodFilter = 'all';

// Current filter values for completed activities
let currentSortFilterCompleted = 'activityDate';
let currentPeriodFilterCompleted = 'all';

// Pagination variables
const ACTIVITIES_PER_PAGE = 10;
let currentCompletedPage = 1;
let currentScheduledPage = 1;
let currentCompletedActivitiesPage = 1;

// Utility functions for sorting and filtering
function applySorting(activities, sortType) {
    const sortedActivities = [...activities];
    
    switch (sortType) {
        case 'activityDate':
            // Sort by activity date (scheduled date if exists, otherwise creation date) - ascending
            return sortedActivities.sort((a, b) => {
                const dateA = a.scheduledDate ? new Date(a.scheduledDate) : new Date(a.createdAt);
                const dateB = b.scheduledDate ? new Date(b.scheduledDate) : new Date(b.createdAt);
                return dateA - dateB;
            });
            
        case 'creationDate':
            // Sort by creation date - ascending
            return sortedActivities.sort((a, b) => {
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
            
        case 'alphabetical':
            // Sort alphabetically by subject - ascending
            return sortedActivities.sort((a, b) => {
                return a.subject.toLowerCase().localeCompare(b.subject.toLowerCase());
            });
            
        default:
            return sortedActivities;
    }
}

function applyPeriodFilter(activities, periodType) {
    const now = new Date();
    
    switch (periodType) {
        case 'all':
            return activities;
            
        case 'week':
            // Get activities from current week (Monday to Sunday)
            const startOfWeek = new Date(now);
            const dayOfWeek = now.getDay();
            const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Sunday = 0, so we need 6 days back
            startOfWeek.setDate(now.getDate() - daysToMonday);
            startOfWeek.setHours(0, 0, 0, 0);
            
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59, 999);
            
            return activities.filter(activity => {
                const activityDate = activity.scheduledDate ? new Date(activity.scheduledDate) : new Date(activity.createdAt);
                return activityDate >= startOfWeek && activityDate <= endOfWeek;
            });
            
        case 'month':
            // Get activities from current month
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
            
            return activities.filter(activity => {
                const activityDate = activity.scheduledDate ? new Date(activity.scheduledDate) : new Date(activity.createdAt);
                return activityDate >= startOfMonth && activityDate <= endOfMonth;
            });
            
        default:
            return activities;
    }
}

// Export elements
const excelExportModal = document.getElementById('excelExportModal');
const exportYear = document.getElementById('exportYear');
const exportMonth = document.getElementById('exportMonth');
const confirmExportBtn = document.getElementById('confirmExportBtn');
const cancelExportBtn = document.getElementById('cancelExportBtn');


// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function sanitizeInput(input) {
    return input.trim().replace(/[<>"'&]/g, '');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// LocalStorage utility functions
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}

// Initialize data from localStorage after utility functions are defined
users = loadFromStorage('users') || [];
pendingUsers = loadFromStorage('pendingUsers') || [];
names = loadFromStorage('names') || [];
activities = loadFromStorage('activities') || [];
completedActivities = loadFromStorage('completedActivities') || [];
institutions = loadFromStorage('institutions') || [];
activeTasks = loadFromStorage('activeTasks') || [];
completedTasks = loadFromStorage('completedTasks') || [];
notifications = loadFromStorage('notifications') || {};
currentUser = loadFromStorage('currentUser') || null;

// Dropdown Functions
function toggleMenuDropdown(event) {
    event.stopPropagation();
    const isOpen = menuDropdown?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdown.style.display = 'block';
        menuDropdownBtn?.classList.add('active');
    }
}

function toggleUserDropdown(event) {
    event.stopPropagation();
    const isOpen = userDropdown?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdown.style.display = 'block';
        userDropdownBtn?.classList.add('active');
    }
}

// Completed Activities page dropdown functions
function toggleMenuDropdownCompleted(event) {
    event.stopPropagation();
    const menuDropdownCompleted = document.getElementById('menuDropdownCompleted');
    const menuDropdownBtnCompleted = document.getElementById('menuDropdownBtnCompleted');
    const isOpen = menuDropdownCompleted?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownCompleted.style.display = 'block';
        menuDropdownBtnCompleted?.classList.add('active');
    }
}

function toggleUserDropdownCompleted(event) {
    event.stopPropagation();
    const userDropdownCompleted = document.getElementById('userDropdownCompleted');
    const userDropdownBtnCompleted = document.getElementById('userDropdownBtnCompleted');
    const isOpen = userDropdownCompleted?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownCompleted.style.display = 'block';
        userDropdownBtnCompleted?.classList.add('active');
    }
}

// Profile page dropdown functions
function toggleMenuDropdownProfile(event) {
    event.stopPropagation();
    const menuDropdownProfile = document.getElementById('menuDropdownProfile');
    const menuDropdownBtnProfile = document.getElementById('menuDropdownBtnProfile');
    const isOpen = menuDropdownProfile?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownProfile.style.display = 'block';
        menuDropdownBtnProfile?.classList.add('active');
    }
}

function toggleUserDropdownProfile(event) {
    event.stopPropagation();
    const userDropdownProfile = document.getElementById('userDropdownProfile');
    const userDropdownBtnProfile = document.getElementById('userDropdownBtnProfile');
    const isOpen = userDropdownProfile?.style.display === 'block';
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownProfile.style.display = 'block';
        userDropdownBtnProfile?.classList.add('active');
    }
}

function closeAllDropdowns() {
    // Main dashboard dropdowns
    menuDropdown && (menuDropdown.style.display = 'none');
    userDropdown && (userDropdown.style.display = 'none');
    menuDropdownBtn?.classList.remove('active');
    userDropdownBtn?.classList.remove('active');
    
    // Completed activities page dropdowns
    const menuDropdownCompleted = document.getElementById('menuDropdownCompleted');
    const userDropdownCompleted = document.getElementById('userDropdownCompleted');
    const menuDropdownBtnCompleted = document.getElementById('menuDropdownBtnCompleted');
    const userDropdownBtnCompleted = document.getElementById('userDropdownBtnCompleted');
    
    menuDropdownCompleted && (menuDropdownCompleted.style.display = 'none');
    userDropdownCompleted && (userDropdownCompleted.style.display = 'none');
    menuDropdownBtnCompleted?.classList.remove('active');
    userDropdownBtnCompleted?.classList.remove('active');
    
    // Profile page dropdowns
    const menuDropdownProfile = document.getElementById('menuDropdownProfile');
    const userDropdownProfile = document.getElementById('userDropdownProfile');
    const menuDropdownBtnProfile = document.getElementById('menuDropdownBtnProfile');
    const userDropdownBtnProfile = document.getElementById('userDropdownBtnProfile');
    
    menuDropdownProfile && (menuDropdownProfile.style.display = 'none');
    userDropdownProfile && (userDropdownProfile.style.display = 'none');
    menuDropdownBtnProfile?.classList.remove('active');
    userDropdownBtnProfile?.classList.remove('active');
    
    // Task pages dropdowns
    const menuDropdownTasks = document.getElementById('menuDropdownTasks');
    const userDropdownTasks = document.getElementById('userDropdownTasks');
    const menuDropdownBtnTasks = document.getElementById('menuDropdownBtnTasks');
    const userDropdownBtnTasks = document.getElementById('userDropdownBtnTasks');
    
    menuDropdownTasks && (menuDropdownTasks.style.display = 'none');
    userDropdownTasks && (userDropdownTasks.style.display = 'none');
    menuDropdownBtnTasks?.classList.remove('active');
    userDropdownBtnTasks?.classList.remove('active');
    
    const menuDropdownCompletedTasks = document.getElementById('menuDropdownCompletedTasks');
    const userDropdownCompletedTasks = document.getElementById('userDropdownCompletedTasks');
    const menuDropdownBtnCompletedTasks = document.getElementById('menuDropdownBtnCompletedTasks');
    const userDropdownBtnCompletedTasks = document.getElementById('userDropdownBtnCompletedTasks');
    
    menuDropdownCompletedTasks && (menuDropdownCompletedTasks.style.display = 'none');
    userDropdownCompletedTasks && (userDropdownCompletedTasks.style.display = 'none');
    menuDropdownBtnCompletedTasks?.classList.remove('active');
    userDropdownBtnCompletedTasks?.classList.remove('active');
    
    // Notes pages dropdowns
    const menuDropdownNotes = document.getElementById('menuDropdownNotes');
    const userDropdownNotes = document.getElementById('userDropdownNotes');
    const menuDropdownBtnNotes = document.getElementById('menuDropdownBtnNotes');
    const userDropdownBtnNotes = document.getElementById('userDropdownBtnNotes');
    
    menuDropdownNotes && (menuDropdownNotes.style.display = 'none');
    userDropdownNotes && (userDropdownNotes.style.display = 'none');
    menuDropdownBtnNotes?.classList.remove('active');
    userDropdownBtnNotes?.classList.remove('active');
    
    // Shared Notes pages dropdowns
    const menuDropdownSharedNotes = document.getElementById('menuDropdownSharedNotes');
    const userDropdownSharedNotes = document.getElementById('userDropdownSharedNotes');
    const menuDropdownBtnSharedNotes = document.getElementById('menuDropdownBtnSharedNotes');
    const userDropdownBtnSharedNotes = document.getElementById('userDropdownBtnSharedNotes');
    
    menuDropdownSharedNotes && (menuDropdownSharedNotes.style.display = 'none');
    userDropdownSharedNotes && (userDropdownSharedNotes.style.display = 'none');
    menuDropdownBtnSharedNotes?.classList.remove('active');
    userDropdownBtnSharedNotes?.classList.remove('active');
}

function closeDropdowns(event) {
    // Don't close if clicking on dropdown buttons or dropdown content
    if (event.target.closest('.dropdown-container')) {
        return;
    }
    closeAllDropdowns();
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupTaskEventListeners();
    setupKeyboardShortcuts();
});

// Keyboard shortcuts for better UX
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+S or Cmd+S to save when editing
        if ((e.ctrlKey || e.metaKey) && e.key === 's' && isInlineEditing) {
            e.preventDefault();
            saveInlineEdits();
        }
        
        // Escape to cancel editing or close modals
        if (e.key === 'Escape') {
            if (isInlineEditing) {
                // Cancel inline editing
                exitInlineEditing();
            } else if (activityDetailModal && activityDetailModal.style.display === 'block') {
                // Close activity detail modal
                hideActivityDetailModal();
            } else if (activityModal && activityModal.style.display === 'block') {
                // Close activity creation modal
                hideActivityModal();
            }
        }
        
        // Enter to save when editing (only if not in textarea)
        if (e.key === 'Enter' && isInlineEditing && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            saveInlineEdits();
        }
    });
}

function initializeApp() {
    if (currentUser) {
        showDashboard();
        updateNotificationCount();
        checkUpcomingActivities();
    } else {
        showLogin();
    }
    
    // Load names on dashboard load
    loadNames();
    
    // Initialize calendar
    renderCalendar();
    
    // Initialize export year dropdown
    initializeExportYears();
    
    // Check for upcoming activities every 30 minutes
    setInterval(checkUpcomingActivities, 30 * 60 * 1000);
}

// Page Navigation
function showPage(pageToShow) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    pageToShow.classList.add('active');
}

function hideAllPages() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

function showLogin() {
    showPage(loginPage);
    clearErrors();
}

function showRegister() {
    showPage(registerPage);
    clearErrors();
}

function showDashboard() {
    showPage(dashboardPage);
    if (currentUserSpan) currentUserSpan.textContent = currentUser;
    loadNames();
    clearSelection();
}

function showProfile() {
    showPage(profilePage);
    const currentUserProfile = document.getElementById('currentUserProfile');
    if (currentUserProfile) currentUserProfile.textContent = currentUser;
    loadUserProfile();
}

function showCompletedActivities() {
    showPage(completedActivitiesPage);
    if (currentUserCompleted) currentUserCompleted.textContent = currentUser;
    loadCompletedActivities();
    
    // Close dropdowns when navigating
    closeAllDropdowns();
}

function showDevelopmentActivities() {
    showPage(dashboardPage);
    if (currentUserSpan) currentUserSpan.textContent = currentUser;
    loadNames();
    clearSelection();
    
    // Close dropdowns when navigating
    closeAllDropdowns();
}

function showEmailConfirmation(userData) {
    showPage(emailConfirmationPage);
    currentPendingUser = userData;
    
    // Update email confirmation display
    if (confirmationEmail) confirmationEmail.textContent = userData.email;
    if (emailTo) emailTo.textContent = userData.email;
    if (emailUsername) emailUsername.textContent = userData.username;
}

// Authentication Functions
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const loginError = document.getElementById('loginError');
    
    if (!username || !password) {
        showError(loginError, 'Por favor complete todos los campos');
        return;
    }
    
    try {
        const response = await apiLogin(username, password);
        
        // Login successful
        hideError(loginError);
        
        // Handle different response structures (server vs localStorage)
        if (response.user) {
            currentUser = response.user.username;
        } else {
            currentUser = username; // For localStorage fallback
        }
        
        localStorage.setItem('currentUser', currentUser);
        
        showDashboard();
        loginForm.reset();
        updateDeleteButton();
        updateNotificationCount();
    } catch (error) {
        showError(loginError, error.message || 'Usuario o contraseña incorrectos');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('newUsername').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const registerError = document.getElementById('registerError');
    
    if (!username || !email || !password || !confirmPassword) {
        showError(registerError, 'Por favor complete todos los campos');
        return;
    }
    
    if (password !== confirmPassword) {
        showError(registerError, 'Las contraseñas no coinciden');
        return;
    }
    
    if (password.length < 6) {
        showError(registerError, 'La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    try {
        await apiRegister(username, email, password);
        
        // Show success message and redirect to login
        registerForm.reset();
        hideError(registerError);
        alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
        showLogin();
    } catch (error) {
        showError(registerError, error.message || 'Error al crear la cuenta');
    }
}

function handleLogout() {
    apiLogout();
    currentUser = null;
    showLogin();
    updateDeleteButton();
}

// Name Management Functions
function loadNames() {
    const namesList = document.getElementById('namesList');
    if (!namesList) return;
    
    namesList.innerHTML = '';
    
    if (currentUser && names[currentUser]) {
        names[currentUser].forEach((name, index) => {
            const li = document.createElement('li');
            
            // Check if this name matches a registered user
            const linkedUser = users.find(user => user.username === name || user.email === name);
            
            if (linkedUser && linkedUser.profilePhoto) {
                // Create photo element
                const photo = document.createElement('img');
                photo.src = linkedUser.profilePhoto;
                photo.alt = name;
                photo.className = 'name-item-photo';
                photo.onerror = () => {
                    // Hide photo if it fails to load
                    photo.style.display = 'none';
                };
                li.appendChild(photo);
            }
            
            // Create content container
            const content = document.createElement('div');
            content.className = 'name-item-content';
            
            const textDiv = document.createElement('div');
            textDiv.className = 'name-item-text';
            textDiv.textContent = name;
            
            content.appendChild(textDiv);
            li.appendChild(content);
            
            li.onclick = () => selectName(name, li);
            namesList.appendChild(li);
        });
    }
}

function addName() {
    const name = sanitizeInput(nameInput.value);
    
    if (!name) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    if (!currentUser) {
        alert('Error: Usuario no identificado.');
        return;
    }
    
    // Initialize names array for current user if it doesn't exist
    if (!names[currentUser]) {
        names[currentUser] = [];
    }
    
    if (names[currentUser].includes(name)) {
        alert('Este nombre ya existe en la lista.');
        return;
    }
    
    names[currentUser].push(name);
    saveToStorage('names', names);
    loadNames();
    nameInput.value = '';
    hideSuggestions();
}

function deleteName() {
    if (!selectedName || !currentUser) {
        return;
    }
    
    if (confirm(`¿Estás seguro de que quieres eliminar "${selectedName}" y toda su información asociada?`)) {
        if (!names[currentUser]) return;
        
        const index = names[currentUser].indexOf(selectedName);
        if (index > -1) {
            // Remove name from names list
            names[currentUser].splice(index, 1);
            saveToStorage('names', names);
            
            // Remove all activities for this name
            if (activities[currentUser] && activities[currentUser][selectedName]) {
                delete activities[currentUser][selectedName];
                saveToStorage('activities', activities);
            }
            
            // Remove all completed activities for this name
            if (completedActivities[currentUser] && completedActivities[currentUser][selectedName]) {
                delete completedActivities[currentUser][selectedName];
                saveToStorage('completedActivities', completedActivities);
            }
            
            // Remove all active tasks for this name (if tasks are name-specific)
            // Note: Tasks appear to be user-specific, not name-specific based on the code structure
            
            // Remove all completed tasks for this name (if tasks are name-specific)
            // Note: Tasks appear to be user-specific, not name-specific based on the code structure
            
            // Remove all institutions for this name
            if (institutions[currentUser] && institutions[currentUser][selectedName]) {
                delete institutions[currentUser][selectedName];
                saveToStorage('institutions', institutions);
            }
            
            clearSelection();
            loadNames();
            
            // Hide content areas since no name is selected
            contentMessage.style.display = 'block';
            activitiesContainer.style.display = 'none';
            institutionsContainer.style.display = 'none';
            calendarContainer.style.display = 'none';
            
            alert(`"${selectedName}" y toda su información asociada han sido eliminados.`);
        }
    }
}

function selectName(name, element) {
    document.querySelectorAll('#namesList li').forEach(li => {
        li.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedName = name;
    selectedInstitution = null;
    selectedPersonTitle.textContent = `Actividades de ${name}`;
    contentMessage.style.display = 'none';
    activitiesContainer.style.display = 'block';
    institutionsContainer.style.display = 'block';
    calendarContainer.style.display = 'block';
    optionsDropdown.style.display = 'inline-block';
    loadInstitutions(name);
    clearActivitiesDisplay();
    renderCalendar();
    updateDeleteButton();
}

function clearSelection() {
    selectedName = null;
    selectedInstitution = null;
    selectedPersonTitle.textContent = 'Selecciona una persona';
    contentMessage.textContent = 'Selecciona un nombre de la lista para ver sus actividades.';
    contentMessage.style.display = 'block';
    activitiesContainer.style.display = 'none';
    institutionsContainer.style.display = 'none';
    calendarContainer.style.display = 'none';
    optionsDropdown.style.display = 'none';
    
    // Hide add activity button
    if (activityButtonContainer) {
        activityButtonContainer.style.display = 'none';
    }
    
    document.querySelectorAll('#namesList li').forEach(li => {
        li.classList.remove('selected');
    });
    
    updateDeleteButton();
}

function updateDeleteButton() {
    deleteNameBtn.disabled = !selectedName;
}

function handleNameInput() {
    const input = nameInput.value.trim();
    if (input.length === 0) {
        hideSuggestions();
        return;
    }
    
    // Show suggestions based on existing users
    const suggestions = users.filter(user => 
        user.username.toLowerCase().includes(input.toLowerCase()) ||
        user.email.toLowerCase().includes(input.toLowerCase()) ||
        (user.firstName && user.firstName.toLowerCase().includes(input.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(input.toLowerCase()))
    ).slice(0, 5);
    
    if (suggestions.length > 0) {
        showSuggestions(suggestions);
    } else {
        hideSuggestions();
    }
}

function showSuggestions(suggestions) {
    userSuggestions.innerHTML = '';
    suggestions.forEach(user => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = `${user.username} (${user.email})`;
        suggestionItem.addEventListener('click', () => {
            nameInput.value = user.username;
            hideSuggestions();
        });
        userSuggestions.appendChild(suggestionItem);
    });
    userSuggestions.style.display = 'block';
}

function hideSuggestions() {
    if (userSuggestions) {
        userSuggestions.style.display = 'none';
        userSuggestions.innerHTML = '';
    }
}

// Calendar Functions
function renderCalendar() {
    if (!calendarTitle || !calendarDays) return;
    
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    calendarDays.innerHTML = '';
    
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        
        // Check if date is in current month
        if (date.getMonth() !== currentMonth) {
            dayElement.classList.add('other-month');
        } else {
            // Make all days in current month clickable
            dayElement.addEventListener('click', () => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const dateString = `${year}-${month}-${day}`;
                showActivitiesForDate(dateString);
            });
        }
        
        // Check if date is today
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }
        
        // Check if date has activities or scheduled activities
        const dateString = date.toISOString().split('T')[0];
        const hasRegularActivities = hasActivitiesOnDate(dateString);
        const hasScheduledActivities = hasScheduledActivitiesOnDate(dateString);
        
        if (hasRegularActivities) {
            dayElement.classList.add('has-activities');
        }
        if (hasScheduledActivities) {
            dayElement.classList.add('has-scheduled');
        }
        
        // Add both classes if both types exist
        if (hasRegularActivities && hasScheduledActivities) {
            dayElement.classList.add('has-both');
        }
        
        calendarDays.appendChild(dayElement);
    }
}

function hasActivitiesOnDate(dateString) {
    if (!selectedName) return false;
    
    // Check activities for current institution or all institutions if none selected
    if (selectedInstitution) {
        const activityKey = `${selectedName}_${selectedInstitution}`;
        if (!activities[activityKey]) return false;
        
        return activities[activityKey].some(activity => {
            const activityDateStr = new Date(activity.createdAt).toISOString().split('T')[0];
            return activityDateStr === dateString && !activity.scheduledDate;
        });
    } else {
        // Check all institutions for this name
        return Object.keys(activities).some(key => {
            if (!key.startsWith(selectedName + '_')) return false;
            return activities[key].some(activity => {
                const activityDateStr = new Date(activity.createdAt).toISOString().split('T')[0];
                return activityDateStr === dateString && !activity.scheduledDate;
            });
        });
    }
}

function hasScheduledActivitiesOnDate(dateString) {
    if (!selectedName) return false;
    
    // Check scheduled activities for current institution or all institutions if none selected
    if (selectedInstitution) {
        const activityKey = `${selectedName}_${selectedInstitution}`;
        if (!activities[activityKey]) return false;
        
        return activities[activityKey].some(activity => {
            return activity.scheduledDate === dateString;
        });
    } else {
        // Check all institutions for this name
        return Object.keys(activities).some(key => {
            if (!key.startsWith(selectedName + '_')) return false;
            return activities[key].some(activity => {
                return activity.scheduledDate === dateString;
            });
        });
    }
}

function showActivitiesForDate(dateString) {
    selectedCalendarDate = dateString;
    
    // Create date object from the dateString to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const formattedDate = date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    calendarActivitiesTitle.textContent = `Actividades del ${formattedDate}`;
    calendarActivitiesList.innerHTML = '';
    
    if (selectedName && currentUser) {
        let createdActivities = [];
        let scheduledActivities = [];
        
        if (selectedInstitution) {
            // Show activities for selected institution only
            const userActivities = activities[currentUser]?.[selectedName]?.[selectedInstitution] || [];
            
            createdActivities = userActivities.filter(activity => {
                const activityDate = new Date(activity.createdAt);
                const activityYear = activityDate.getFullYear();
                const activityMonth = String(activityDate.getMonth() + 1).padStart(2, '0');
                const activityDay = String(activityDate.getDate()).padStart(2, '0');
                const activityDateStr = `${activityYear}-${activityMonth}-${activityDay}`;
                return activityDateStr === dateString && !activity.scheduledDate;
            });
            
            scheduledActivities = userActivities.filter(activity => {
                return activity.scheduledDate === dateString;
            });
        } else {
            // Show activities from all institutions for this name
            const nameActivities = activities[currentUser]?.[selectedName] || {};
            Object.keys(nameActivities).forEach(institution => {
                const institutionActivities = nameActivities[institution] || [];
                
                createdActivities = createdActivities.concat(institutionActivities.filter(activity => {
                    const activityDate = new Date(activity.createdAt);
                    const activityYear = activityDate.getFullYear();
                    const activityMonth = String(activityDate.getMonth() + 1).padStart(2, '0');
                    const activityDay = String(activityDate.getDate()).padStart(2, '0');
                    const activityDateStr = `${activityYear}-${activityMonth}-${activityDay}`;
                    return activityDateStr === dateString && !activity.scheduledDate;
                }));
                
                scheduledActivities = scheduledActivities.concat(institutionActivities.filter(activity => {
                    return activity.scheduledDate === dateString;
                }));
            });
        }
        
        const allActivities = [...createdActivities, ...scheduledActivities];
        
        if (allActivities.length > 0) {
            allActivities.forEach(activity => {
                const activityElement = document.createElement('div');
                activityElement.className = 'calendar-activity-item';
                activityElement.style.cursor = 'pointer';
                
                let time;
                let statusLabel = '';
                
                if (activity.scheduledDate && activity.scheduledTime) {
                    time = activity.scheduledTime;
                    statusLabel = '<span class="activity-status scheduled">Programada</span>';
                } else {
                    time = new Date(activity.createdAt).toLocaleTimeString('es-ES', {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    statusLabel = '<span class="activity-status completed">Realizada</span>';
                }
                
                activityElement.innerHTML = `
                    <div class="calendar-activity-subject">${activity.subject} ${statusLabel}</div>
                    <div class="calendar-activity-time">${time}</div>
                `;
                
                // Add click event to open activity detail
                activityElement.addEventListener('click', () => {
                    // Close the calendar activities modal first
                    calendarActivitiesModal.style.display = 'none';
                    showActivityDetail(activity);
                });
                
                calendarActivitiesList.appendChild(activityElement);
            });
        } else {
            calendarActivitiesList.innerHTML = '<p style="text-align: center; color: #666; margin: 20px 0;">No hay actividades para este día</p>';
        }
    }
    
    calendarActivitiesModal.style.display = 'block';
    
    // Set up button listeners immediately after modal is shown
    const scheduleBtn = document.getElementById('scheduleActivityBtn');
    const closeBtn = document.getElementById('closeCalendarActivitiesBtn');
    
    if (scheduleBtn) {
        // Remove any existing listeners first
        scheduleBtn.replaceWith(scheduleBtn.cloneNode(true));
        const newScheduleBtn = document.getElementById('scheduleActivityBtn');
        newScheduleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            isSchedulingActivity = true;
            calendarActivitiesModal.style.display = 'none';
            showActivityModal();
        });
    }
    
    if (closeBtn) {
        // Remove any existing listeners first
        closeBtn.replaceWith(closeBtn.cloneNode(true));
        const newCloseBtn = document.getElementById('closeCalendarActivitiesBtn');
        newCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            calendarActivitiesModal.style.display = 'none';
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation between login and register
    showRegisterLink?.addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });

    showLoginLink?.addEventListener('click', (e) => {
        showLogin();
    });
    

    // Note form submission - handle both regular and shared notes
    noteForm?.addEventListener('submit', (event) => {
        const isEditingShared = noteForm.dataset.editingSharedNoteId;
        if (isEditingShared) {
            saveSharedNote(event);
        } else {
            saveNote(event);
        }
    });

    loginForm?.addEventListener('submit', handleLogin);
    registerForm?.addEventListener('submit', handleRegister);

    // Dashboard functionality
    profileBtn?.addEventListener('click', showProfile);
    logoutBtn?.addEventListener('click', handleLogout);
    backToDashboard?.addEventListener('click', showDashboard);
    
    // Completed Activities navigation
    completedActivitiesBtn?.addEventListener('click', showCompletedActivities);
    developmentActivitiesBtn?.addEventListener('click', showDevelopmentActivities);
    backToDevelopmentBtn?.addEventListener('click', showDevelopmentActivities);
    
    // Notes navigation from main dashboard
    personalNotesBtn?.addEventListener('click', showPersonalNotes);
    sharedNotesBtn?.addEventListener('click', showSharedNotes);
    
    // Tasks navigation from main dashboard
    const pendingTasksBtn = document.getElementById('pendingTasksBtn');
    const completedTasksBtn = document.getElementById('completedTasksBtn');
    pendingTasksBtn?.addEventListener('click', showActiveTasks);
    completedTasksBtn?.addEventListener('click', showCompletedTasks);
    
    // Dropdown functionality
    menuDropdownBtn?.addEventListener('click', toggleMenuDropdown);
    userDropdownBtn?.addEventListener('click', toggleUserDropdown);
    
    // Completed Activities page dropdown functionality
    document.getElementById('menuDropdownBtnCompleted')?.addEventListener('click', toggleMenuDropdownCompleted);
    document.getElementById('userDropdownBtnCompleted')?.addEventListener('click', toggleUserDropdownCompleted);
    document.getElementById('completedActivitiesBtnCompleted')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnCompleted')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('profileBtnCompleted')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnCompleted')?.addEventListener('click', handleLogout);
    
    // Profile page dropdown functionality
    document.getElementById('menuDropdownBtnProfile')?.addEventListener('click', toggleMenuDropdownProfile);
    document.getElementById('userDropdownBtnProfile')?.addEventListener('click', toggleUserDropdownProfile);
    document.getElementById('completedActivitiesBtnProfile')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnProfile')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('pendingTasksBtnProfile')?.addEventListener('click', showActiveTasks);
    document.getElementById('completedTasksBtnProfile')?.addEventListener('click', showCompletedTasks);
    document.getElementById('personalNotesBtnProfile')?.addEventListener('click', showPersonalNotes);
    document.getElementById('sharedNotesBtnProfile')?.addEventListener('click', showSharedNotes);
    document.getElementById('profileBtnProfile')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnProfile')?.addEventListener('click', handleLogout);
    
    // Active Tasks page dropdown functionality
    document.getElementById('menuDropdownBtnTasks')?.addEventListener('click', toggleMenuDropdownTasks);
    document.getElementById('userDropdownBtnTasks')?.addEventListener('click', toggleUserDropdownTasks);
    document.getElementById('completedActivitiesBtnTasks')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnTasks')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('pendingTasksBtnTasks')?.addEventListener('click', showActiveTasks);
    document.getElementById('completedTasksBtnTasks')?.addEventListener('click', showCompletedTasks);
    document.getElementById('personalNotesBtnTasks')?.addEventListener('click', showPersonalNotes);
    document.getElementById('sharedNotesBtnTasks')?.addEventListener('click', showSharedNotes);
    document.getElementById('profileBtnTasks')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnTasks')?.addEventListener('click', handleLogout);
    
    // Completed Tasks page dropdown functionality
    document.getElementById('menuDropdownBtnCompletedTasks')?.addEventListener('click', toggleMenuDropdownCompletedTasks);
    document.getElementById('userDropdownBtnCompletedTasks')?.addEventListener('click', toggleUserDropdownCompletedTasks);
    document.getElementById('completedActivitiesBtnCompletedTasks')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnCompletedTasks')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('pendingTasksBtnCompletedTasks')?.addEventListener('click', showActiveTasks);
    document.getElementById('completedTasksBtnCompletedTasks')?.addEventListener('click', showCompletedTasks);
    document.getElementById('personalNotesBtnCompletedTasks')?.addEventListener('click', showPersonalNotes);
    document.getElementById('sharedNotesBtnCompletedTasks')?.addEventListener('click', showSharedNotes);
    document.getElementById('profileBtnCompletedTasks')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnCompletedTasks')?.addEventListener('click', handleLogout);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', closeDropdowns);
    addNameBtn?.addEventListener('click', addName);
    deleteNameBtn?.addEventListener('click', deleteName);
    
    // Profile functionality
    profileForm?.addEventListener('submit', handleProfileUpdate);
    changePhotoBtn?.addEventListener('click', () => photoInput?.click());
    photoInput?.addEventListener('change', handlePhotoUpload);
    deleteAccountBtn?.addEventListener('click', showDeleteConfirmation);
    
    // Modal functionality
    confirmDeleteBtn?.addEventListener('click', handleAccountDeletion);
    cancelDeleteBtn?.addEventListener('click', hideDeleteConfirmation);
    
    // Email confirmation functionality
    confirmAccountBtn?.addEventListener('click', handleEmailConfirmation);
    backToLoginBtn?.addEventListener('click', showLogin);
    resendEmailBtn?.addEventListener('click', handleResendEmail);
    
    // Institution management
    addInstitutionBtn?.addEventListener('click', () => {
        showInstitutionModal();
        hideInstitutionDropdown();
    });
    institutionForm?.addEventListener('submit', handleInstitutionSubmit);
    cancelInstitutionBtn?.addEventListener('click', hideInstitutionModal);
    deleteInstitutionBtn?.addEventListener('click', () => {
        handleDeleteInstitution();
        hideInstitutionDropdown();
    });
    confirmDeleteInstitutionBtn?.addEventListener('click', confirmDeleteInstitution);
    cancelDeleteInstitutionBtn?.addEventListener('click', hideDeleteInstitutionModal);
    
    // Institution dropdown menu
    institutionMenuBtn?.addEventListener('click', toggleInstitutionDropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.institution-menu-container')) {
            hideInstitutionDropdown();
        }
    });
    
    // Activity functionality
    addActivityBtn?.addEventListener('click', showActivityModal);
    addActivityBtn2?.addEventListener('click', showActivityModal);
    
    
    activityForm?.addEventListener('submit', handleActivitySubmit);
    cancelActivityBtn?.addEventListener('click', hideActivityModal);
    
    // Also add event listener to the confirm button directly as backup
    confirmActivityBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        handleActivitySubmit(e);
    });
    
    // Activity detail functionality
    editActivityBtn?.addEventListener('click', handleEditActivity);
    deleteActivityBtn?.addEventListener('click', showDeleteActivityModal);
    closeDetailBtn?.addEventListener('click', hideActivityDetailModal);
    
    // Activity delete functionality
    confirmDeleteActivityBtn?.addEventListener('click', confirmDeleteActivity);
    cancelDeleteActivityBtn?.addEventListener('click', () => {
        deleteActivityModal.style.display = 'none';
    });

    // Calendar event listeners
    prevMonthBtn?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthBtn?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    // Character counters
    activitySubject?.addEventListener('input', updateSubjectCounter);
    activityComments?.addEventListener('input', updateCommentsCounter);
    
    // Sharing checkbox listener
    shareActivityCheckbox?.addEventListener('change', handleSharingCheckboxChange);
    
    // Notifications functionality
    notificationsBtn?.addEventListener('click', toggleNotificationsDropdown);
    clearAllNotifications?.addEventListener('click', clearAllUserNotifications);
    
    // Close notifications dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (notificationsDropdown && !e.target.closest('.notifications-container')) {
            notificationsDropdown.style.display = 'none';
        }
    });
    
    // Enter key for adding names
    nameInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addName();
        }
    });
    
    // User suggestions functionality
    nameInput?.addEventListener('input', handleNameInput);
    nameInput?.addEventListener('focus', handleNameInput);
    nameInput?.addEventListener('blur', () => {
        // Delay hiding to allow clicking on suggestions
        setTimeout(() => hideSuggestions(), 200);
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (nameInput && userSuggestions && !nameInput.contains(e.target) && !userSuggestions.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Set up event listeners (removed duplicate call)
    setupOptionsDropdown();
    setupOptionsDropdownCompleted();
    setupBulkActionsEventListeners();
    setupPaginationEventListeners();
    setupTaskEventListeners();
    confirmExportBtn?.addEventListener('click', exportToExcel);
    cancelExportBtn?.addEventListener('click', hideExcelExportModal);
}

// Profile Management Functions
function loadUserProfile() {
    const user = users.find(u => u.username === currentUser);
    if (!user) return;
    
    // Load basic info (readonly)
    document.getElementById('profileUsername').value = user.username;
    document.getElementById('profileEmail').value = user.email;
    
    // Load extended profile data
    document.getElementById('firstName').value = user.firstName || '';
    document.getElementById('lastName').value = user.lastName || '';
    document.getElementById('position').value = user.position || '';
    document.getElementById('phone').value = user.phone || '';
    
    // Load profile photo
    if (user.profilePhoto) {
        profilePhoto.src = user.profilePhoto;
    }
    
    clearProfileMessages();
}

function handleProfileUpdate(e) {
    e.preventDefault();
    
    const userIndex = users.findIndex(u => u.username === currentUser);
    if (userIndex === -1) return;
    
    // Update user data
    users[userIndex].firstName = document.getElementById('firstName').value.trim();
    users[userIndex].lastName = document.getElementById('lastName').value.trim();
    users[userIndex].position = document.getElementById('position').value.trim();
    users[userIndex].phone = document.getElementById('phone').value.trim();
    users[userIndex].updatedAt = new Date().toISOString();
    
    // Save to localStorage
    saveToStorage('users', users);
    
    showProfileSuccess('Perfil actualizado correctamente.');
}

function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showProfileError('Por favor, selecciona un archivo de imagen válido.');
        return;
    }
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        showProfileError('La imagen debe ser menor a 2MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        profilePhoto.src = imageData;
        
        // Save to user data
        const userIndex = users.findIndex(u => u.username === currentUser);
        if (userIndex !== -1) {
            users[userIndex].profilePhoto = imageData;
            users[userIndex].updatedAt = new Date().toISOString();
            saveToStorage('users', users);
            showProfileSuccess('Foto de perfil actualizada.');
        }
    };
    reader.readAsDataURL(file);
}

function showDeleteConfirmation() {
    confirmModal.classList.add('show');
}

function hideDeleteConfirmation() {
    confirmModal.classList.remove('show');
}

function handleAccountDeletion() {
    // Remove user from users array
    const userIndex = users.findIndex(u => u.username === currentUser);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        saveToStorage('users', users);
    }
    
    // Remove user from names list if present
    const nameIndex = names.indexOf(currentUser);
    if (nameIndex !== -1) {
        names.splice(nameIndex, 1);
        saveToStorage('names', names);
    }
    
    // Remove user's activities from all institutions
    Object.keys(activities).forEach(key => {
        if (key === currentUser || key.startsWith(currentUser + '_')) {
            delete activities[key];
        }
    });
    saveToStorage('activities', activities);
    
    // Clear current user and redirect to login
    currentUser = null;
    localStorage.removeItem('currentUser');
    hideDeleteConfirmation();
    showLogin();
    
    // Show confirmation message
    setTimeout(() => {
        showSuccess(loginError, 'Cuenta eliminada exitosamente.');
    }, 500);
}

function showProfileSuccess(message) {
    profileSuccess.textContent = message;
    profileError.textContent = '';
    setTimeout(() => {
        profileSuccess.textContent = '';
    }, 3000);
}

function showProfileError(message) {
    profileError.textContent = message;
    profileSuccess.textContent = '';
}

function clearProfileMessages() {
    profileSuccess.textContent = '';
    profileError.textContent = '';
}

// Email Confirmation Functions
function generateConfirmationToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function handleEmailConfirmation() {
    if (!currentPendingUser) return;
    
    // Move user from pending to confirmed users
    const confirmedUser = {
        username: currentPendingUser.username,
        email: currentPendingUser.email,
        password: currentPendingUser.password,
        createdAt: currentPendingUser.createdAt,
        confirmedAt: new Date().toISOString(),
        firstName: '',
        lastName: '',
        position: '',
        phone: ''
    };
    
    users.push(confirmedUser);
    saveToStorage('users', users);
    
    // Remove from pending users
    const pendingIndex = pendingUsers.findIndex(u => u.username === currentPendingUser.username);
    if (pendingIndex !== -1) {
        pendingUsers.splice(pendingIndex, 1);
        saveToStorage('pendingUsers', pendingUsers);
    }
    
    // Show success and redirect to login
    showLogin();
    setTimeout(() => {
        showSuccess(loginError, '¡Cuenta confirmada exitosamente! Ya puedes iniciar sesión.');
    }, 500);
    
    currentPendingUser = null;
}

function handleResendEmail() {
    if (!currentPendingUser) return;
    
    // Update confirmation token
    const pendingIndex = pendingUsers.findIndex(u => u.username === currentPendingUser.username);
    if (pendingIndex !== -1) {
        pendingUsers[pendingIndex].confirmationToken = generateConfirmationToken();
        pendingUsers[pendingIndex].resendAt = new Date().toISOString();
        saveToStorage('pendingUsers', pendingUsers);
        currentPendingUser = pendingUsers[pendingIndex];
    }
    
    // Show feedback
    if (resendEmailBtn) {
        const originalText = resendEmailBtn.textContent;
        resendEmailBtn.textContent = '✓ Email Reenviado';
        resendEmailBtn.disabled = true;
        
        setTimeout(() => {
            resendEmailBtn.textContent = originalText;
            resendEmailBtn.disabled = false;
        }, 3000);
    }
}

// Utility function for setting default time
function setDefaultTime() {
    if (!activityHour || !activityMinute) return;
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const roundedMinutes = Math.ceil(currentMinutes / 15) * 15;
    
    if (roundedMinutes >= 60) {
        activityMinute.value = '00';
        const nextHour = (currentHour + 1) % 24;
        activityHour.value = nextHour.toString().padStart(2, '0');
    } else {
        activityHour.value = currentHour.toString().padStart(2, '0');
        activityMinute.value = roundedMinutes.toString().padStart(2, '0');
    }
}

// Activity Management Functions
function showActivityModal() {
    // Check if we have the required elements and data
    if (!selectedName || !currentUser) {
        alert('Por favor, selecciona un nombre de la lista primero.');
        return;
    }
    
    // Check if institution is selected (unless we're scheduling from calendar)
    if (!isSchedulingActivity && !selectedInstitution) {
        alert('Por favor, selecciona una institución primero.');
        return;
    }
    
    // Set modal title and scheduling fields visibility
    if (isSchedulingActivity) {
        activityModalTitle.textContent = 'Programar Actividad';
        schedulingFields.style.display = 'block';
    } else if (isEditingActivity && currentActivity && currentActivity.scheduledDate) {
        activityModalTitle.textContent = 'Editar Actividad';
        schedulingFields.style.display = 'block';
    } else {
        activityModalTitle.textContent = isEditingActivity ? 'Editar Actividad' : 'Agregar Actividad';
        schedulingFields.style.display = 'none';
    }
    
    // Clear form
    if (activityForm) {
        activityForm.reset();
    }
    
    // Set person name
    if (activityPersonName && selectedName) {
        activityPersonName.value = selectedName;
    }
    
    // Populate institution dropdown
    populateInstitutionDropdown();
    
    // Set scheduling fields if in scheduling mode
    if (isSchedulingActivity) {
        if (selectedCalendarDate && activityDate) {
            activityDate.value = selectedCalendarDate;
        }
        setDefaultTime();
    }
    
    // Check if sharing is available and set up checkbox
    setupSharingCheckbox();
    
    if (activityModal) {
        activityModal.style.display = 'flex';
        activitySubject?.focus();
    }
}

function populateInstitutionDropdown() {
    if (!activityInstitution || !currentUser || !selectedName) return;
    
    activityInstitution.innerHTML = '';
    
    const userInstitutions = institutions[currentUser]?.[selectedName] || [];
    
    userInstitutions.forEach(institution => {
        const option = document.createElement('option');
        option.value = institution;
        option.textContent = institution;
        
        // Pre-select the currently selected institution
        if (institution === selectedInstitution) {
            option.selected = true;
        }
        
        activityInstitution.appendChild(option);
    });
}

function hideActivityModal() {
    if (activityModal) {
        activityModal.style.display = 'none';
        activityForm?.reset();
        schedulingFields.style.display = 'none';
        isEditingActivity = false;
        currentActivity = null;
        isSchedulingActivity = false;
        selectedCalendarDate = null;
        
        // Clear the institution dropdown
        if (activityInstitution) {
            activityInstitution.innerHTML = '';
        }
    }
}

function handleActivitySubmit(e) {
    e.preventDefault();
    
    const subject = sanitizeInput(activitySubject.value);
    const comments = sanitizeInput(activityComments.value);
    const personName = activityPersonName?.value;
    const institution = activityInstitution?.value;
    
    
    // Remove debug alert
    // alert('handleActivitySubmit function called');
    
    // Check if all required fields are filled
    if (!subject) {
        alert('Por favor, completa el campo Asunto.');
        return;
    }
    
    if (!comments) {
        alert('Por favor, completa el campo Comentarios.');
        return;
    }
    
    if (!personName) {
        alert('Por favor, completa el campo Nombre.');
        return;
    }
    
    if (!institution) {
        alert('Por favor, selecciona una Institución.');
        return;
    }
    
    if (!selectedName) {
        alert('Por favor, selecciona un nombre.');
        return;
    }
    
    if (comments.length > 500) {
        alert('Los comentarios no pueden exceder 500 caracteres.');
        return;
    }
    
    const activity = {
        id: isEditingActivity && currentActivity ? currentActivity.id : Date.now(),
        subject: subject,
        comments: comments,
        personName: personName,
        institution: institution,
        createdAt: isEditingActivity && currentActivity ? currentActivity.createdAt : new Date().toISOString(),
        scheduledDate: null,
        isShared: isEditingActivity && currentActivity ? currentActivity.isShared : false,
        sharedBy: isEditingActivity && currentActivity ? currentActivity.sharedBy : null
    };
    
    // Add or preserve scheduling information
    const shouldHandleScheduling = isSchedulingActivity || (isEditingActivity && currentActivity && currentActivity.scheduledDate);
    if (shouldHandleScheduling) {
        const date = activityDate?.value;
        const hour = activityHour?.value;
        const minute = activityMinute?.value;
        
        if (!date || !hour || !minute) {
            alert('Por favor, completa la fecha y hora de programación.');
            return;
        }
        
        activity.scheduledDate = date;
        activity.scheduledTime = `${hour}:${minute}`;
    }
    
    // Save activity to the selected institution (use the institution from the form)
    if (!activities[currentUser]) {
        activities[currentUser] = {};
    }
    if (!activities[currentUser][selectedName]) {
        activities[currentUser][selectedName] = {};
    }
    if (!activities[currentUser][selectedName][institution]) {
        activities[currentUser][selectedName][institution] = [];
    }
    
    if (isEditingActivity && currentActivity) {
        // Update existing activity. If institution changed, move the activity between institution lists
        const previousInstitution = currentActivity.institution;
        const previousActivitySnapshot = { ...currentActivity };

        // Ensure destination list exists
        if (!activities[currentUser][selectedName][institution]) {
            activities[currentUser][selectedName][institution] = [];
        }

        if (institution !== previousInstitution) {
            // Remove from previous institution list
            const prevList = activities[currentUser][selectedName][previousInstitution] || [];
            const prevIndex = prevList.findIndex(a => a.id === currentActivity.id);
            if (prevIndex !== -1) {
                prevList.splice(prevIndex, 1);
            }
            // Add to new institution list
            activities[currentUser][selectedName][institution].push(activity);

            // Propagate institution move/update to shared copies (no-op if none exist)
            try {
                updateSharedActivityCopies(activity, previousInstitution, previousActivitySnapshot);
            } catch (err) {
                console.error('Error updating shared activity copies:', err);
            }
        } else {
            // Same institution: replace in place
            const list = activities[currentUser][selectedName][institution];
            const idx = list.findIndex(a => a.id === currentActivity.id);
            if (idx !== -1) {
                list[idx] = activity;
            }

            // Propagate field updates to shared copies (no-op if none exist)
            try {
                updateSharedActivityCopies(activity, previousInstitution, previousActivitySnapshot);
            } catch (err) {
                console.error('Error updating shared activity copies:', err);
            }
        }
    } else {
        // Add new activity
        activities[currentUser][selectedName][institution].push(activity);
        
        // Handle sharing if checkbox is checked
        if (shareActivityCheckbox && shareActivityCheckbox.checked && !shareActivityCheckbox.disabled) {
            const shareSuccess = shareActivityWithUser(activity, selectedName, currentUser);
            if (shareSuccess) {
                // Mark owner's activity as shared so future edits propagate
                activity.isShared = true;
                console.log('Activity shared successfully with', selectedName);
            } else {
                console.log('Failed to share activity with', selectedName);
            }
        }
        
        // Create notification for activities associated with other users
        if (selectedName !== currentUser) {
            const associatedUser = users.find(user => user.username === selectedName || user.email === selectedName);
            if (associatedUser) {
                createNotification(associatedUser.username, {
                    type: 'activity_created',
                    message: `${currentUser} ha creado una actividad asociada a ti: "${activity.subject}"`,
                    activityId: activity.id,
                    createdBy: currentUser,
                    createdAt: new Date().toISOString()
                });
            }
        }
    }
    
    saveToStorage('activities', activities);
    
    // Update selectedInstitution to match the form value
    selectedInstitution = institution;
    
    loadActivities(selectedName, institution);
    
    hideActivityModal();
    
    // Reset scheduling mode
    isSchedulingActivity = false;

    // Update calendar as well to reflect changes
    renderCalendar();
}

function showDeleteActivityModal() {
    deleteActivityModal.style.display = 'block';
}

function hideDeleteActivityModal() {
    deleteActivityModal.style.display = 'none';
}

function handleDeleteActivity() {
    if (!currentActivity || !currentUser) return;
    
    // Check if it's a completed activity
    if (completedActivities[currentUser]) {
        const completedIndex = completedActivities[currentUser].findIndex(a => a.id === currentActivity.id);
        if (completedIndex !== -1) {
            // Remove from completed activities
            completedActivities[currentUser].splice(completedIndex, 1);
            saveToStorage('completedActivities', completedActivities);
            
            hideDeleteActivityModal();
            hideActivityDetailModal();
            
            // Reload completed activities display
            loadCompletedActivitiesDisplay();
            return;
        }
    }
    
    // Handle regular activities
    if (!selectedName || !selectedInstitution) return;
    
    // Use the correct activity structure: activities[currentUser][selectedName][institution]
    if (activities[currentUser] && activities[currentUser][selectedName] && activities[currentUser][selectedName][selectedInstitution]) {
        const activityIndex = activities[currentUser][selectedName][selectedInstitution].findIndex(a => a.id === currentActivity.id);
        if (activityIndex !== -1) {
            activities[currentUser][selectedName][selectedInstitution].splice(activityIndex, 1);
            saveToStorage('activities', activities);
            
            hideDeleteActivityModal();
            hideActivityDetailModal();
            loadActivities(selectedName, selectedInstitution);
            renderCalendar(); // Update calendar to reflect changes
        }
    }
}

function confirmDeleteActivity() {
    handleDeleteActivity();
}

function updateSubjectCounter() {
    if (activitySubjectCounter && activitySubject) {
        activitySubjectCounter.textContent = activitySubject.value.length;
    }
}

function updateCommentsCounter() {
    if (commentsCounter && activityComments) {
        commentsCounter.textContent = activityComments.value.length;
    }
}

// Sharing functionality
function setupSharingCheckbox() {
    if (!shareActivityCheckbox || !shareActivityNote || !selectedName) return;
    
    // Check if the selected name has a registered account
    const hasAccount = checkIfNameHasAccount(selectedName);
    
    if (hasAccount) {
        shareActivityCheckbox.disabled = false;
        shareActivityNote.style.display = 'none';
    } else {
        shareActivityCheckbox.disabled = true;
        shareActivityCheckbox.checked = false;
        shareActivityNote.style.display = 'block';
    }
}

function checkIfNameHasAccount(name) {
    // Check if the name matches any registered user's username or email
    return users.some(user => user.username === name || user.email === name);
}

function handleSharingCheckboxChange() {
    // This function can be used for additional logic when checkbox changes
    // Currently, the main logic is handled in setupSharingCheckbox
}

function shareActivityWithUser(activity, recipientName, sharedByUser) {
    // Find the recipient user
    const recipientUser = users.find(user => user.username === recipientName || user.email === recipientName);
    if (!recipientUser) return false;
    
    // Create a copy of the activity with sharing information
    const sharedActivity = {
        ...activity,
        isShared: true,
        sharedBy: sharedByUser,
        originalOwner: sharedByUser,
        originalId: activity.id,
        sharedAt: new Date().toISOString(),
        id: Date.now() + Math.random() // Ensure unique ID for shared activity
    };
    
    // The shared activity should appear in the recipient's activities under their own name
    // Initialize activities structure for recipient if needed
    if (!activities[recipientUser.username]) {
        activities[recipientUser.username] = {};
    }
    if (!activities[recipientUser.username][sharedByUser]) {
        activities[recipientUser.username][sharedByUser] = {};
    }
    if (!activities[recipientUser.username][sharedByUser][activity.institution]) {
        activities[recipientUser.username][sharedByUser][activity.institution] = [];
    }
    
    // Add the shared activity to recipient's activities under the sharer's name
    activities[recipientUser.username][sharedByUser][activity.institution].push(sharedActivity);
    
    // Create notification for the recipient
    createNotification(recipientUser.username, {
        type: 'activity_shared',
        message: `${sharedByUser} te ha compartido una actividad: "${activity.subject}"`,
        activityId: activity.id,
        sharedBy: sharedByUser,
        createdAt: new Date().toISOString()
    });
    
    return true;
}

// Update shared copies of an activity across all recipients
function updateSharedActivityCopies(updatedActivity, previousInstitution, previousActivitySnapshot) {
    try {
        // Iterate through all users to find recipients who have this shared activity
        users.forEach(u => {
            const recipient = u.username;
            if (!recipient || recipient === currentUser) return; // skip owner

            const ownerSection = activities[recipient]?.[currentUser];
            if (!ownerSection) return;

            const prevInst = previousInstitution;
            const newInst = updatedActivity.institution;

            // Find the shared activity in recipient's data
            let found = null;
            let foundInst = null;

            // Look in all institutions for this recipient
            Object.keys(ownerSection).forEach(inst => {
                const list = ownerSection[inst] || [];
                const byOriginalId = list.find(a => a.isShared && a.sharedBy === currentUser && (a.originalId === updatedActivity.id));
                if (byOriginalId) {
                    found = byOriginalId;
                    foundInst = inst;
                    return;
                }
                // Fallback: match by creation time and subject for older shared activities
                const byHeuristics = list.find(a => a.isShared && a.sharedBy === currentUser && 
                    Math.abs(new Date(a.createdAt) - new Date(previousActivitySnapshot.createdAt)) < 1000 &&
                    a.subject === previousActivitySnapshot.subject);
                if (byHeuristics) {
                    found = byHeuristics;
                    foundInst = inst;
                }
            });

            if (found && foundInst) {
                // Create updated shared activity
                const updatedShared = {
                    ...found,
                    subject: updatedActivity.subject,
                    comments: updatedActivity.comments,
                    scheduledDate: updatedActivity.scheduledDate,
                    scheduledTime: updatedActivity.scheduledTime,
                    institution: updatedActivity.institution,
                    personName: updatedActivity.personName
                };

                // Remove from old institution if changed
                if (foundInst !== newInst) {
                    const oldList = activities[recipient][currentUser][foundInst] || [];
                    const oldIdx = oldList.findIndex(a => a.id === found.id);
                    if (oldIdx !== -1) {
                        oldList.splice(oldIdx, 1);
                    }
                    // Add to new institution
                    if (!activities[recipient][currentUser][newInst]) {
                        activities[recipient][currentUser][newInst] = [];
                    }
                    activities[recipient][currentUser][newInst].push(updatedShared);
                } else {
                    // Update in place
                    const list = activities[recipient][currentUser][foundInst] || [];
                    const idx = list.findIndex(a => a.id === found.id);
                    if (idx !== -1) {
                        list[idx] = updatedShared;
                    }
                }
            }
        });
        // Persist changes after propagation
        saveToStorage('activities', activities);
    } catch (e) {
        console.error('Failed to update shared activity copies:', e);
    }
}

// Notifications System
function createNotification(username, notification) {
    if (!notifications[username]) {
        notifications[username] = [];
    }
    
    // Add unique ID and mark as unread
    notification.id = Date.now() + Math.random();
    notification.read = false;
    
    notifications[username].push(notification);
    saveToStorage('notifications', notifications);
    
    // Update notification count if it's for current user
    if (username === currentUser) {
        updateNotificationCount();
    }
}

function toggleNotificationsDropdown() {
    if (notificationsDropdown) {
        const isVisible = notificationsDropdown.style.display === 'block';
        notificationsDropdown.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            loadNotifications();
        }
    }
}

function loadNotifications() {
    if (!currentUser || !notificationsList) return;
    
    const userNotifications = notifications[currentUser] || [];
    
    if (userNotifications.length === 0) {
        notificationsList.innerHTML = '<p class="no-notifications">No hay notificaciones</p>';
        return;
    }
    
    // Sort by creation date (newest first)
    const sortedNotifications = userNotifications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    notificationsList.innerHTML = '';
    
    sortedNotifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification-item ${!notification.read ? 'unread' : ''}`;
        
        const timeAgo = getTimeAgo(new Date(notification.createdAt));
        
        notificationElement.innerHTML = `
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${timeAgo}</div>
            <button class="notification-delete" onclick="deleteNotification('${notification.id}')" title="Eliminar notificación">×</button>
        `;
        
        // Mark as read when clicked
        notificationElement.addEventListener('click', (e) => {
            if (!e.target.classList.contains('notification-delete')) {
                markNotificationAsRead(notification.id);
            }
        });
        
        notificationsList.appendChild(notificationElement);
    });
}

function updateNotificationCount() {
    if (!currentUser || !notificationCount) return;
    
    const userNotifications = notifications[currentUser] || [];
    const unreadCount = userNotifications.filter(n => !n.read).length;
    
    if (unreadCount > 0) {
        notificationCount.textContent = unreadCount;
        notificationCount.style.display = 'flex';
    } else {
        notificationCount.style.display = 'none';
    }
}

function markNotificationAsRead(notificationId) {
    if (!currentUser) return;
    
    const userNotifications = notifications[currentUser] || [];
    const notification = userNotifications.find(n => n.id == notificationId);
    
    if (notification && !notification.read) {
        notification.read = true;
        saveToStorage('notifications', notifications);
        updateNotificationCount();
        loadNotifications();
    }
}

function deleteNotification(notificationId) {
    if (!currentUser) return;
    
    const userNotifications = notifications[currentUser] || [];
    const index = userNotifications.findIndex(n => n.id == notificationId);
    
    if (index !== -1) {
        userNotifications.splice(index, 1);
        saveToStorage('notifications', notifications);
        updateNotificationCount();
        loadNotifications();
    }
}

function clearAllUserNotifications() {
    if (!currentUser) return;
    
    notifications[currentUser] = [];
    saveToStorage('notifications', notifications);
    updateNotificationCount();
    loadNotifications();
}

function getTimeAgo(date) {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora mismo';
    if (diffInMinutes < 60) return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
}

// Check for upcoming scheduled activities and create notifications
function checkUpcomingActivities() {
    if (!currentUser) return;
    
    const now = new Date();
    const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Check all user's activities
    if (activities[currentUser]) {
        Object.keys(activities[currentUser]).forEach(personName => {
            Object.keys(activities[currentUser][personName]).forEach(institution => {
                const personActivities = activities[currentUser][personName][institution] || [];
                
                personActivities.forEach(activity => {
                    if (activity.scheduledDate && activity.scheduledTime) {
                        const activityDateTime = new Date(`${activity.scheduledDate}T${activity.scheduledTime}:00`);
                        
                        // Check if activity is within next 24 hours and hasn't been notified yet
                        if (activityDateTime > now && activityDateTime <= next24Hours) {
                            const notificationKey = `reminder_${activity.id}`;
                            const userNotifications = notifications[currentUser] || [];
                            
                            // Check if notification already exists
                            const existingNotification = userNotifications.find(n => n.activityId === activity.id && n.type === 'activity_reminder');
                            
                            if (!existingNotification) {
                                const timeUntil = Math.ceil((activityDateTime - now) / (1000 * 60 * 60));
                                createNotification(currentUser, {
                                    type: 'activity_reminder',
                                    message: `Recordatorio: Tienes una actividad programada "${activity.subject}" en ${timeUntil} hora${timeUntil > 1 ? 's' : ''}`,
                                    activityId: activity.id,
                                    scheduledFor: activityDateTime.toISOString(),
                                    createdAt: new Date().toISOString()
                                });
                            }
                        }
                    }
                });
            });
        });
    }
}

// Institution Management Functions
function loadInstitutions(name) {
    if (!currentUser) return;
    
    if (!institutions[currentUser]) {
        institutions[currentUser] = {};
    }
    if (!institutions[currentUser][name]) {
        institutions[currentUser][name] = [];
    }
    
    institutionsList.innerHTML = '';
    
    institutions[currentUser][name].forEach((institution, index) => {
        const institutionElement = document.createElement('div');
        institutionElement.className = 'institution-item';
        institutionElement.textContent = institution;
        institutionElement.dataset.index = index;
        institutionElement.addEventListener('click', () => selectInstitution(name, institution, institutionElement));
        institutionsList.appendChild(institutionElement);
    });
}

function selectInstitution(name, institution, element) {
    document.querySelectorAll('.institution-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedInstitution = institution;
    updateDeleteInstitutionButton();
    
    // Show add activity button when institution is selected
    if (activityButtonContainer) {
        activityButtonContainer.style.display = 'block';
    }
    
    loadActivities(name, institution);
}

function updateDeleteInstitutionButton() {
    if (deleteInstitutionBtn) {
        deleteInstitutionBtn.disabled = !selectedInstitution;
    }
}

function toggleInstitutionDropdown() {
    if (institutionDropdown) {
        const isVisible = institutionDropdown.style.display === 'block';
        institutionDropdown.style.display = isVisible ? 'none' : 'block';
    }
}

function hideInstitutionDropdown() {
    if (institutionDropdown) {
        institutionDropdown.style.display = 'none';
    }
}

function handleDeleteInstitution() {
    if (!selectedInstitution) {
        alert('Por favor, selecciona una institución para eliminar.');
        return;
    }
    showDeleteInstitutionModal();
}

function showDeleteInstitutionModal() {
    if (deleteInstitutionModal) {
        deleteInstitutionModal.style.display = 'flex';
    }
}

function hideDeleteInstitutionModal() {
    if (deleteInstitutionModal) {
        deleteInstitutionModal.style.display = 'none';
    }
}

function confirmDeleteInstitution() {
    if (!selectedName || !selectedInstitution) return;
    
    // Get current institutions for the selected name
    const userInstitutions = institutions[currentUser] || {};
    const nameInstitutions = userInstitutions[selectedName] || [];
    
    // Remove the selected institution
    const updatedInstitutions = nameInstitutions.filter(inst => inst !== selectedInstitution);
    
    // Update the institutions object
    if (!institutions[currentUser]) institutions[currentUser] = {};
    institutions[currentUser][selectedName] = updatedInstitutions;
    
    // Remove all activities for this institution
    const userActivities = activities[currentUser] || {};
    const nameActivities = userActivities[selectedName] || {};
    if (nameActivities[selectedInstitution]) {
        delete nameActivities[selectedInstitution];
        activities[currentUser][selectedName] = nameActivities;
        saveToStorage('activities', activities);
    }
    
    // Save updated institutions
    saveToStorage('institutions', institutions);
    
    // Clear selection and reload
    selectedInstitution = null;
    updateDeleteInstitutionButton();
    loadInstitutions(selectedName);
    clearActivitiesDisplay();
    
    hideDeleteInstitutionModal();
    
    // Show success message
    alert('Institución eliminada exitosamente.');
    loadActivities(selectedName, selectedInstitution);
    renderCalendar();
}

function showInstitutionModal() {
    institutionModal.style.display = 'block';
    institutionName?.focus();
}

function hideInstitutionModal() {
    institutionModal.style.display = 'none';
    institutionForm?.reset();
}

function handleInstitutionSubmit(e) {
    e.preventDefault();
    
    const name = sanitizeInput(institutionName.value);
    
    if (!name) {
        alert('Por favor, ingresa un nombre válido para la institución.');
        return;
    }
    
    if (!currentUser || !selectedName) {
        alert('Error: No hay usuario o nombre seleccionado.');
        return;
    }
    
    // Initialize institutions structure if needed
    if (!institutions[currentUser]) {
        institutions[currentUser] = {};
    }
    if (!institutions[currentUser][selectedName]) {
        institutions[currentUser][selectedName] = [];
    }
    
    if (institutions[currentUser][selectedName].includes(name)) {
        alert('Esta institución ya existe para este usuario.');
        return;
    }
    
    institutions[currentUser][selectedName].push(name);
    saveToStorage('institutions', institutions);
    loadInstitutions(selectedName);
    hideInstitutionModal();
}

function clearActivitiesDisplay() {
    completedActivitiesList.innerHTML = '';
    scheduledActivitiesList.innerHTML = '';
}

function loadActivities(name, institution) {
    if (!name || !institution || !currentUser) {
        clearActivitiesDisplay();
        return;
    }
    
    // Reset pagination when loading new activities
    if (selectedName !== name || selectedInstitution !== institution) {
        currentCompletedPage = 1;
        currentScheduledPage = 1;
    }
    
    let userActivities = activities[currentUser]?.[name]?.[institution] || [];
    
    // Apply period filter first
    userActivities = applyPeriodFilter(userActivities, currentPeriodFilter);
    
    // Apply sorting
    userActivities = applySorting(userActivities, currentSortFilter);
    
    // Clear previous activities
    clearActivitiesDisplay();
    
    // Separate completed and scheduled activities
    const completedActivities = userActivities.filter(activity => !activity.scheduledDate);
    const scheduledActivities = userActivities.filter(activity => activity.scheduledDate);
    
    // Display completed activities with pagination
    if (completedActivities.length > 0) {
        const paginatedCompleted = paginateArray(completedActivities, currentCompletedPage, ACTIVITIES_PER_PAGE);
        paginatedCompleted.forEach(activity => {
            const activityElement = createActivityElement(activity);
            completedActivitiesList.appendChild(activityElement);
        });
        
        // Update pagination controls for completed activities
        updatePaginationControls(
            completedPagination, 
            prevCompletedBtn, 
            nextCompletedBtn, 
            completedPageInfo, 
            currentCompletedPage, 
            completedActivities.length, 
            ACTIVITIES_PER_PAGE
        );
    } else {
        completedActivitiesList.innerHTML = '<p class="no-activities">No hay actividades realizadas.</p>';
        if (completedPagination) completedPagination.style.display = 'none';
    }
    
    // Display scheduled activities with pagination
    if (scheduledActivities.length > 0) {
        const paginatedScheduled = paginateArray(scheduledActivities, currentScheduledPage, ACTIVITIES_PER_PAGE);
        paginatedScheduled.forEach(activity => {
            const activityElement = createActivityElement(activity, true);
            scheduledActivitiesList.appendChild(activityElement);
        });
        
        // Update pagination controls for scheduled activities
        updatePaginationControls(
            scheduledPagination, 
            prevScheduledBtn, 
            nextScheduledBtn, 
            scheduledPageInfo, 
            currentScheduledPage, 
            scheduledActivities.length, 
            ACTIVITIES_PER_PAGE
        );
    } else {
        scheduledActivitiesList.innerHTML = '<p class="no-activities">No hay actividades programadas.</p>';
        if (scheduledPagination) scheduledPagination.style.display = 'none';
    }
    
}

function createActivityElement(activity, isScheduled = false) {
    const activityDiv = document.createElement('div');
    activityDiv.className = isScheduled ? 'activity-item scheduled' : 'activity-item';
    activityDiv.dataset.activityId = activity.id;
    
    // Use activity date for display (scheduled date if exists, otherwise creation date)
    let displayDate, displayTime;
    if (isScheduled && activity.scheduledDate) {
        // Parse the date string correctly to avoid timezone issues
        const [year, month, day] = activity.scheduledDate.split('-').map(Number);
        const scheduledDate = new Date(year, month - 1, day);
        displayDate = scheduledDate.toLocaleDateString('es-ES');
        displayTime = activity.scheduledTime || '00:00';
    } else {
        const date = new Date(activity.createdAt);
        displayDate = date.toLocaleDateString('es-ES');
        displayTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    }
    
    // Add scheduled indicator
    const scheduledIndicator = isScheduled ? '<span class="scheduled-badge">Programada</span>' : '';
    
    // Add shared indicator
    const sharedIndicator = activity.isShared ? '<span class="shared-badge">Compartida</span>' : '';
    
    // Simplified display: only date, time, and subject
    activityDiv.innerHTML = `
        <div class="activity-summary">
            <div class="activity-date-time">
                <span class="activity-date">${displayDate}</span>
                <span class="activity-time">${displayTime}</span>
            </div>
            <div class="activity-subject">
                ${activity.subject}
                ${scheduledIndicator}
                ${sharedIndicator}
            </div>
            <div class="activity-checkbox">
                <input type="checkbox" id="complete-${activity.id}" onchange="markActivityAsCompleted('${activity.id}')">
                <label for="complete-${activity.id}">Completada</label>
            </div>
        </div>
    `;
    
    // Add double-click event to show activity details
    activityDiv.addEventListener('dblclick', () => showActivityDetail(activity));
    
    return activityDiv;
}

// Mark activity as completed
function markActivityAsCompleted(activityId) {
    if (!currentUser || !selectedName) return;
    
    // Immediately hide the activity element
    const activityElement = document.querySelector(`[data-activity-id="${activityId}"]`);
    if (activityElement) {
        activityElement.style.display = 'none';
    }
    
    // Find the activity in all institutions
    let foundActivity = null;
    let foundInstitution = null;
    
    if (activities[currentUser] && activities[currentUser][selectedName]) {
        Object.keys(activities[currentUser][selectedName]).forEach(institution => {
            const institutionActivities = activities[currentUser][selectedName][institution];
            const activityIndex = institutionActivities.findIndex(a => a.id == activityId);
            if (activityIndex !== -1) {
                foundActivity = institutionActivities[activityIndex];
                foundInstitution = institution;
                // Remove from current activities
                institutionActivities.splice(activityIndex, 1);
            }
        });
    }
    
    if (foundActivity) {
        // Add to completed activities
        if (!completedActivities[currentUser]) {
            completedActivities[currentUser] = [];
        }
        
        // Add completion timestamp
        foundActivity.completedAt = new Date().toISOString();
        foundActivity.completedBy = currentUser;
        
        completedActivities[currentUser].push(foundActivity);
        
        // Save to localStorage
        saveToStorage('activities', activities);
        saveToStorage('completedActivities', completedActivities);
        
        // Refresh the current view after a short delay to allow for smooth transition
        setTimeout(() => {
            // Update calendar
            renderCalendar();
        }, 100);
    }
}

// Load completed activities
function loadCompletedActivities() {
    if (!completedActivitiesDisplay) return;
    
    // Show the options dropdown when there are activities to display
    if (optionsDropdownCompleted) {
        optionsDropdownCompleted.style.display = 'block';
    }
    
    // Show bulk actions when there are activities to display
    if (bulkActions) {
        bulkActions.style.display = 'flex';
    }
    
    loadCompletedActivitiesDisplay();
}

// Function to load and display completed activities with filters
function loadCompletedActivitiesDisplay() {
    if (!completedActivitiesDisplay) return;
    
    completedActivitiesDisplay.innerHTML = '';
    
    if (currentUser && completedActivities[currentUser]) {
        const userCompletedActivities = completedActivities[currentUser];
        
        if (userCompletedActivities.length > 0) {
            // Apply filters to completed activities
            const filteredActivities = applyCompletedActivityFilters(userCompletedActivities);
            
            if (filteredActivities.length > 0) {
                // Apply pagination to filtered activities
                const paginatedActivities = paginateArray(filteredActivities, currentCompletedActivitiesPage, ACTIVITIES_PER_PAGE);
                paginatedActivities.forEach(activity => {
                    const activityCard = createCompletedActivityCard(activity);
                    completedActivitiesDisplay.appendChild(activityCard);
                });
                
                // Update pagination controls for completed activities page
                updatePaginationControls(
                    completedActivitiesPagination, 
                    prevCompletedActivitiesBtn, 
                    nextCompletedActivitiesBtn, 
                    completedActivitiesPageInfo, 
                    currentCompletedActivitiesPage, 
                    filteredActivities.length, 
                    ACTIVITIES_PER_PAGE
                );
            } else {
                completedActivitiesDisplay.innerHTML = '<p style="text-align: center; color: #666; margin: 20px 0;">No hay actividades completadas que coincidan con los filtros aplicados</p>';
                if (completedActivitiesPagination) completedActivitiesPagination.style.display = 'none';
            }
        } else {
            completedActivitiesDisplay.innerHTML = '<p style="text-align: center; color: #666; margin: 20px 0;">No hay actividades completadas</p>';
        }
    } else {
        completedActivitiesDisplay.innerHTML = '<p style="text-align: center; color: #666; margin: 20px 0;">No hay actividades completadas</p>';
    }
}

// Create completed activity element
function createCompletedActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'task-card completed-activity-card';
    card.innerHTML = `
        <div class="task-card-header">
            <div class="task-card-info">
                <div class="task-card-date">Creada: ${formatDate(activity.createdAt)}</div>
                <div class="task-card-date completed-date">Completada: ${formatDate(activity.completedAt)}</div>
                <div class="task-card-name">${escapeHtml(activity.subject)}</div>
                <div class="task-card-details">
                    <small>Persona: ${escapeHtml(activity.personName)} | Institución: ${escapeHtml(activity.institution)}</small>
                </div>
            </div>
            <div class="task-card-actions">
                <button class="task-card-delete" onclick="deleteCompletedActivity('${activity.id}')">
                    Eliminar
                </button>
            </div>
        </div>
        <div class="task-card-comments">
            <div class="task-card-comments-title">Comentarios:</div>
            ${activity.comments && activity.comments.trim() ? 
                `<div class="task-card-comment-item completed">
                    <div class="comment-content">
                        <div class="comment-text">${escapeHtml(activity.comments)}</div>
                    </div>
                </div>` : 
                '<div class="task-card-no-comments">Sin comentarios</div>'
            }
        </div>
    `;
    
    // Add double-click event to show activity details
    card.addEventListener('dblclick', () => showActivityDetail(activity));
    
    return card;
}

// Export completed tasks to Excel
function exportCompletedTasksToExcel() {
    if (!currentUser) {
        alert('Por favor, inicia sesión para exportar tareas completadas.');
        return;
    }
    
    const userCompletedTasks = completedTasks[currentUser] || [];
    
    if (userCompletedTasks.length === 0) {
        alert('No hay tareas completadas para exportar.');
        return;
    }
    
    // Prepare data for Excel with tasks in columns
    const excelData = [];
    
    // First row: Task names
    const taskNamesRow = [''];
    userCompletedTasks.forEach(task => {
        taskNamesRow.push(task.name || 'Sin nombre');
    });
    excelData.push(taskNamesRow);
    
    // Second row: Creation dates
    const creationDatesRow = ['Fecha de Creación'];
    userCompletedTasks.forEach(task => {
        const createdDate = new Date(task.createdAt).toLocaleDateString('es-ES');
        creationDatesRow.push(createdDate);
    });
    excelData.push(creationDatesRow);
    
    // Third row: Completion dates
    const completionDatesRow = ['Fecha de Completado'];
    userCompletedTasks.forEach(task => {
        const completedDate = new Date(task.completedAt).toLocaleDateString('es-ES');
        completionDatesRow.push(completedDate);
    });
    excelData.push(completionDatesRow);
    
    // Find maximum number of comments across all tasks
    let maxComments = 0;
    userCompletedTasks.forEach(task => {
        if (task.comments && task.comments.length > 0) {
            maxComments = Math.max(maxComments, task.comments.length);
        }
    });
    
    // Add comment rows
    for (let i = 0; i < maxComments; i++) {
        const commentRow = [`Comentario ${i + 1}`];
        
        userCompletedTasks.forEach(task => {
            if (task.comments && task.comments[i]) {
                const comment = task.comments[i];
                const commentText = typeof comment === 'string' ? comment : comment.text;
                const commentDate = typeof comment === 'object' && comment.timestamp 
                    ? new Date(comment.timestamp).toLocaleDateString('es-ES')
                    : '';
                
                const cellContent = commentDate 
                    ? `${commentText} (${commentDate})`
                    : commentText;
                commentRow.push(cellContent);
            } else {
                commentRow.push('');
            }
        });
        
        excelData.push(commentRow);
    }
    
    // If no comments exist, add an empty comments row
    if (maxComments === 0) {
        const noCommentsRow = ['Comentarios'];
        userCompletedTasks.forEach(() => {
            noCommentsRow.push('Sin comentarios');
        });
        excelData.push(noCommentsRow);
    }
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(excelData);
    
    // Set column widths
    const colWidths = [{ width: 20 }]; // First column for labels
    userCompletedTasks.forEach(() => {
        colWidths.push({ width: 40 }); // Task columns
    });
    ws['!cols'] = colWidths;
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Tareas Completadas');
    
    // Generate filename with current date
    const currentDate = new Date().toLocaleDateString('es-ES').replace(/\//g, '-');
    const filename = `Tareas_Completadas_${currentUser}_${currentDate}.xlsx`;
    
    // Save file
    XLSX.writeFile(wb, filename);
    
    alert(`Archivo Excel exportado exitosamente: ${filename}`);
}

// Notes storage
let personalNotes = JSON.parse(localStorage.getItem('personalNotes')) || {};
let sharedNotesStorage = JSON.parse(localStorage.getItem('sharedNotesStorage')) || [];

// Show personal notes page
function showPersonalNotes() {
    hideAllPages();
    document.getElementById('personalNotesPage').style.display = 'block';
    
    // Update current user display
    const currentUserNotes = document.getElementById('currentUserNotes');
    if (currentUserNotes && currentUser) {
        currentUserNotes.textContent = currentUser;
    }
    
    displayPersonalNotes();
    closeAllDropdowns();
}

// Display personal notes - API VERSION
async function displayPersonalNotes() {
    const personalNotesList = document.getElementById('personalNotesList');
    const noPersonalNotesMessage = document.getElementById('noPersonalNotesMessage');
    
    if (!personalNotesList || !currentUser) return;
    
    personalNotesList.innerHTML = '';
    
    try {
        const userNotes = await apiGetPersonalNotes();
        
        if (userNotes.length === 0) {
            noPersonalNotesMessage.style.display = 'block';
            return;
        }
        
        noPersonalNotesMessage.style.display = 'none';
        
        userNotes.forEach(note => {
            const noteCard = createNoteCard(note);
            personalNotesList.appendChild(noteCard);
        });
    } catch (error) {
        console.error('Error loading personal notes:', error);
        noPersonalNotesMessage.style.display = 'block';
    }
}

// Create note card
function createNoteCard(note) {
    const card = document.createElement('div');
    card.className = 'task-card note-card';
    card.innerHTML = `
        <div class="task-card-header">
            <div class="task-card-info">
                <div class="task-card-date">Creada: ${formatDate(note.createdAt)}</div>
                <div class="task-card-name">${escapeHtml(note.subject)}</div>
                ${note.sharedWith ? `<div class="task-card-shared">Compartida con: ${escapeHtml(note.sharedWith)}</div>` : ''}
            </div>
            <div class="task-card-actions">
                <button class="task-card-delete" onclick="deleteNote('${note.id}')">
                    Eliminar
                </button>
            </div>
        </div>
        <div class="task-card-comments">
            <div class="task-card-comments-title">Comentarios:</div>
            ${note.comments && note.comments.trim() ? 
                `<div class="task-card-comment-item">
                    <div class="comment-content">
                        <div class="comment-text">${escapeHtml(note.comments)}</div>
                    </div>
                </div>` : 
                '<div class="task-card-no-comments">Sin comentarios</div>'
            }
        </div>
    `;
    
    // Add double-click event to edit note
    card.addEventListener('dblclick', () => showEditNoteModal(note));
    
    return card;
}

// Show note modal
function showNoteModal() {
    const noteModal = document.getElementById('noteModal');
    const noteForm = document.getElementById('noteForm');
    const noteModalTitle = document.getElementById('noteModalTitle');
    
    // Reset form and modal for new note
    noteForm.reset();
    noteModalTitle.textContent = 'Nueva Nota';
    delete noteForm.dataset.editingNoteId;
    
    updateNoteCharacterCounters();
    noteModal.style.display = 'block';
}

// Close note modal
function closeNoteModal() {
    const noteModal = document.getElementById('noteModal');
    noteModal.style.display = 'none';
}

// Show edit note modal
function showEditNoteModal(note) {
    const noteModal = document.getElementById('noteModal');
    const noteForm = document.getElementById('noteForm');
    const noteModalTitle = document.getElementById('noteModalTitle');
    const noteSubject = document.getElementById('noteSubject');
    const noteComments = document.getElementById('noteComments');
    const shareWithUser = document.getElementById('shareWithUser');
    
    // Change modal title and populate fields
    noteModalTitle.textContent = 'Editar Nota';
    noteSubject.value = note.subject;
    noteComments.value = note.comments || '';
    shareWithUser.value = note.sharedWith || '';
    
    // Store the note ID for editing
    noteForm.dataset.editingNoteId = note.id;
    
    updateNoteCharacterCounters();
    noteModal.style.display = 'block';
}

// Update character counters for note form
function updateNoteCharacterCounters() {
    const noteSubject = document.getElementById('noteSubject');
    const noteComments = document.getElementById('noteComments');
    const noteSubjectCounter = document.getElementById('noteSubjectCounter');
    const noteCommentsCounter = document.getElementById('noteCommentsCounter');
    
    if (noteSubject && noteSubjectCounter) {
        noteSubjectCounter.textContent = `${noteSubject.value.length}/100`;
    }
    
    if (noteComments && noteCommentsCounter) {
        noteCommentsCounter.textContent = `${noteComments.value.length}/500`;
    }
}

// Handle user suggestions for sharing notes
function handleUserSuggestions(input) {
    const userSuggestions = document.getElementById('userSuggestionsNotes');
    const inputValue = input.value.toLowerCase().trim();
    
    if (inputValue.length === 0) {
        userSuggestions.style.display = 'none';
        return;
    }
    
    // Get all registered users except current user
    const registeredUsers = loadFromStorage('users') || {};
    const allUsernames = Object.keys(registeredUsers).filter(username => username !== currentUser);
    const matchingUsers = allUsernames.filter(username => 
        username.toLowerCase().includes(inputValue) || 
        (registeredUsers[username]?.email && registeredUsers[username].email.toLowerCase().includes(inputValue))
    );
    
    if (matchingUsers.length === 0) {
        userSuggestions.style.display = 'none';
        return;
    }
    
    userSuggestions.innerHTML = '';
    matchingUsers.forEach(username => {
        const suggestion = document.createElement('div');
        suggestion.className = 'user-suggestion';
        const userInfo = registeredUsers[username];
        suggestion.innerHTML = `
            <div class="suggestion-name">${escapeHtml(username)}</div>
            <div class="suggestion-email">${escapeHtml(userInfo?.email || '')}</div>
        `;
        suggestion.onclick = () => {
            input.value = username;
            userSuggestions.style.display = 'none';
        };
        userSuggestions.appendChild(suggestion);
    });
    
    userSuggestions.style.display = 'block';
}

// Save note
async function saveNote(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    const noteForm = document.getElementById('noteForm');
    const noteSubject = document.getElementById('noteSubject').value.trim();
    const noteComments = document.getElementById('noteComments').value.trim();
    const shareWithUser = document.getElementById('shareWithUser').value.trim();
    
    if (!noteSubject) {
        alert('Por favor ingrese un asunto para la nota');
        return;
    }
    
    const isEditing = noteForm.dataset.editingNoteId;
    
    try {
        const noteData = {
            subject: noteSubject,
            comments: noteComments
        };
        
        if (isEditing) {
            // Update existing note
            await apiUpdatePersonalNote(isEditing, noteData);
        } else {
            // Create new note
            if (shareWithUser) {
                // Create shared note
                await apiCreateSharedNote({
                    ...noteData,
                    shareWithUser: shareWithUser
                });
            } else {
                // Create personal note
                await apiCreatePersonalNote(noteData);
            }
        }
        
        // Close modal and refresh display
        closeNoteModal();
        displayPersonalNotes();
        
        const action = isEditing ? 'actualizada' : 'creada';
        alert(`Nota ${action} exitosamente${shareWithUser ? ' y compartida' : ''}`);
    } catch (error) {
        alert('Error al guardar la nota: ' + error.message);
    }
}

// Delete note - API VERSION
async function deleteNote(noteId) {
    if (!currentUser) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
        try {
            await apiDeletePersonalNote(noteId);
            displayPersonalNotes();
            alert('Nota eliminada exitosamente');
        } catch (error) {
            alert('Error al eliminar la nota: ' + error.message);
        }
    }
}

// Delete completed activity
function deleteCompletedActivity(activityId) {
    if (!currentUser) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar esta actividad completada?')) {
        const userCompletedActivities = completedActivities[currentUser] || [];
        const activityIndex = userCompletedActivities.findIndex(activity => activity.id === activityId);
        
        if (activityIndex !== -1) {
            userCompletedActivities.splice(activityIndex, 1);
            saveToStorage('completedActivities', completedActivities);
            
            // Simply reload the completed activities display without calling undefined functions
            loadCompletedActivitiesDisplay();
            alert('Actividad eliminada exitosamente');
        }
    }
}

// Bulk Actions Event Listeners Setup
function setupBulkActionsEventListeners() {
    // Select all button
    selectAllCompletedBtn?.addEventListener('click', toggleSelectAll);
    
    // Delete selected button
    deleteSelectedBtn?.addEventListener('click', showBulkDeleteModal);
    
    // Bulk delete modal buttons
    confirmBulkDeleteBtn?.addEventListener('click', confirmBulkDelete);
    cancelBulkDeleteBtn?.addEventListener('click', hideBulkDeleteModal);
    
    // Close modal when clicking outside
    bulkDeleteModal?.addEventListener('click', (e) => {
        if (e.target === bulkDeleteModal) {
            hideBulkDeleteModal();
        }
    });
}

// Handle individual activity selection
function handleActivitySelection(event) {
    const checkbox = event.target;
    const activityDiv = checkbox.closest('.activity-item');
    
    if (checkbox.checked) {
        activityDiv.classList.add('selected');
    } else {
        activityDiv.classList.remove('selected');
    }
    
    updateBulkActionsState();
}

// Toggle select all checkboxes
function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('.activity-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
        const activityDiv = checkbox.closest('.activity-item');
        
        if (checkbox.checked) {
            activityDiv.classList.add('selected');
        } else {
            activityDiv.classList.remove('selected');
        }
    });
    
    updateBulkActionsState();
}

// Update bulk actions button states
function updateBulkActionsState() {
    const checkboxes = document.querySelectorAll('.activity-checkbox');
    const checkedBoxes = document.querySelectorAll('.activity-checkbox:checked');
    
    if (deleteSelectedBtn) {
        deleteSelectedBtn.disabled = checkedBoxes.length === 0;
    }
    
    if (selectAllCompletedBtn) {
        const allChecked = checkboxes.length > 0 && checkboxes.length === checkedBoxes.length;
        selectAllCompletedBtn.textContent = allChecked ? 'Deseleccionar Todo' : 'Seleccionar Todo';
    }
}

// Show bulk delete modal
function showBulkDeleteModal() {
    const checkedBoxes = document.querySelectorAll('.activity-checkbox:checked');
    
    if (checkedBoxes.length === 0) {
        alert('Por favor, selecciona al menos una actividad para eliminar.');
        return;
    }
    
    const message = `¿Estás seguro de que deseas eliminar ${checkedBoxes.length} actividad(es) completada(s)?`;
    bulkDeleteMessage.textContent = message;
    bulkDeleteModal.style.display = 'block';
}

// Hide bulk delete modal
function hideBulkDeleteModal() {
    bulkDeleteModal.style.display = 'none';
}

// Confirm bulk delete
function confirmBulkDelete() {
    const checkedBoxes = document.querySelectorAll('.activity-checkbox:checked');
    const activityIds = Array.from(checkedBoxes).map(cb => cb.dataset.activityId);
    
    // Remove activities from the completedActivities array
    if (currentUser && completedActivities[currentUser]) {
        // Filter out the selected activities
        const originalCount = completedActivities[currentUser].length;
        completedActivities[currentUser] = completedActivities[currentUser].filter(
            activity => !activityIds.includes(activity.id)
        );
        const newCount = completedActivities[currentUser].length;
        const deletedCount = originalCount - newCount;
        
        // Save to localStorage
        saveToStorage('completedActivities', completedActivities);
        
        // Hide modal
        hideBulkDeleteModal();
        
        // Immediately remove the selected elements from DOM
        activityIds.forEach(id => {
            const elements = document.querySelectorAll(`[data-activity-id="${id}"]`);
            elements.forEach(element => {
                if (element) {
                    element.remove();
                }
            });
        });
        
        // Reset pagination to first page
        currentCompletedActivitiesPage = 1;
        
        // Force complete reload after DOM manipulation
        setTimeout(() => {
            if (completedActivitiesDisplay) {
                completedActivitiesDisplay.innerHTML = '';
            }
            // Clear any remaining checkboxes
            document.querySelectorAll('.activity-checkbox:checked').forEach(cb => {
                cb.checked = false;
            });
            loadCompletedActivitiesDisplay();
            updateBulkActionsState();
        }, 100);
        
        // Show success message
        alert(`${deletedCount} actividad(es) eliminada(s) exitosamente.`);
    }
}

// Close modals when clicking outside
activityModal?.addEventListener('click', (e) => {
    if (e.target === activityModal) {
        hideActivityModal();
    }
});

activityDetailModal?.addEventListener('click', (e) => {
    if (e.target === activityDetailModal) {
        hideActivityDetailModal();
    }
});

deleteActivityModal?.addEventListener('click', (e) => {
    if (e.target === deleteActivityModal) {
        hideDeleteActivityModal();
    }
});

institutionModal?.addEventListener('click', (e) => {
    if (e.target === institutionModal) {
        hideInstitutionModal();
    }
});

excelExportModal?.addEventListener('click', (e) => {
    if (e.target === excelExportModal) {
        hideExcelExportModal();
    }
});


// Error handling functions
function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        hideError(element);
    }, 5000);
}

function hideError(element) {
    element.style.display = 'none';
    element.textContent = '';
}

function clearErrors() {
    if (loginError) hideError(loginError);
    if (registerError) hideError(registerError);
}

function showSuccess(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.style.color = '#4CAF50';
    setTimeout(() => {
        hideError(element);
        element.style.color = '';
    }, 5000);
}

// Activity Filter Functions
function applyActivityFilters(activities) {
    let filteredActivities = [...activities];
    
    // Apply period filter
    if (currentPeriodFilter !== 'all') {
        const now = new Date();
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        filteredActivities = filteredActivities.filter(activity => {
            const activityDate = activity.scheduledDate ? 
                new Date(activity.scheduledDate) : 
                new Date(activity.createdAt);
            
            if (currentPeriodFilter === 'week') {
                return activityDate >= startOfWeek;
            } else if (currentPeriodFilter === 'month') {
                return activityDate >= startOfMonth;
            }
            return true;
        });
    }
    
    // Apply sort filter
    filteredActivities.sort((a, b) => {
        if (currentSortFilter === 'activityDate') {
            const dateA = a.scheduledDate ? new Date(a.scheduledDate) : new Date(a.createdAt);
            const dateB = b.scheduledDate ? new Date(b.scheduledDate) : new Date(b.createdAt);
            return dateB - dateA; // Most recent first
        } else if (currentSortFilter === 'creationDate') {
            return new Date(b.createdAt) - new Date(a.createdAt); // Most recent first
        } else if (currentSortFilter === 'alphabetical') {
            return a.subject.localeCompare(b.subject);
        }
        return 0;
    });
    
    return filteredActivities;
}

// Options Dropdown Functions
function setupOptionsDropdown() {
    // Options button click handler
    optionsBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleOptionsMenu();
    });
    
    // Export option click handler
    exportOption?.addEventListener('click', (e) => {
        e.stopPropagation();
        showExcelExportModal();
        hideOptionsMenu();
    });
    
    // Sort submenu items click handlers
    const sortSubmenuItems = document.querySelectorAll('#sortOption .submenu-item');
    sortSubmenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const sortValue = item.getAttribute('data-sort');
            if (sortValue) {
                currentSortFilter = sortValue;
                updateActiveSubmenuItem('sortOption', sortValue);
                if (selectedName) {
                    loadActivities(selectedName, selectedInstitution);
                }
            }
            hideOptionsMenu();
        });
    });
    
    // Show submenu items click handlers
    const showSubmenuItems = document.querySelectorAll('#showOption .submenu-item');
    showSubmenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const periodValue = item.getAttribute('data-period');
            if (periodValue) {
                currentPeriodFilter = periodValue;
                updateActiveSubmenuItem('showOption', periodValue);
                if (selectedName) {
                    loadActivities(selectedName, selectedInstitution);
                }
            }
            hideOptionsMenu();
        });
    });
    
    // Initialize active states
    updateActiveSubmenuItem('sortOption', currentSortFilter);
    updateActiveSubmenuItem('showOption', currentPeriodFilter);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (optionsDropdown && !optionsDropdown.contains(e.target)) {
            hideOptionsMenu();
        }
    });
}

function updateActiveSubmenuItem(optionId, activeValue) {
    const option = document.getElementById(optionId);
    if (!option) return;
    
    const submenuItems = option.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.classList.remove('active');
        const itemValue = item.getAttribute('data-sort') || item.getAttribute('data-period');
        if (itemValue === activeValue) {
            item.classList.add('active');
        }
    });
}

function toggleOptionsMenu() {
    if (optionsDropdown) {
        optionsDropdown.classList.toggle('active');
    }
}

function hideOptionsMenu() {
    if (optionsDropdown) {
        optionsDropdown.classList.remove('active');
    }
}

// Completed Activities Options Dropdown Functions
function setupOptionsDropdownCompleted() {
    // Options button click handler for completed activities
    optionsBtnCompleted?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleOptionsMenuCompleted();
    });
    
    // Export option click handler for completed activities
    exportOptionCompleted?.addEventListener('click', (e) => {
        e.stopPropagation();
        showExcelExportModalCompleted();
        hideOptionsMenuCompleted();
    });
    
    // Sort submenu items click handlers for completed activities
    const sortSubmenuItemsCompleted = document.querySelectorAll('#sortOptionCompleted .submenu-item');
    sortSubmenuItemsCompleted.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const sortValue = item.getAttribute('data-sort');
            if (sortValue) {
                currentSortFilterCompleted = sortValue;
                updateActiveSubmenuItemCompleted('sortOptionCompleted', sortValue);
                loadCompletedActivitiesDisplay();
            }
            hideOptionsMenuCompleted();
        });
    });
    
    // Show submenu items click handlers for completed activities
    const showSubmenuItemsCompleted = document.querySelectorAll('#showOptionCompleted .submenu-item');
    showSubmenuItemsCompleted.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const periodValue = item.getAttribute('data-period');
            if (periodValue) {
                currentPeriodFilterCompleted = periodValue;
                updateActiveSubmenuItemCompleted('showOptionCompleted', periodValue);
                loadCompletedActivitiesDisplay();
            }
            hideOptionsMenuCompleted();
        });
    });
    
    // Initialize active states for completed activities
    updateActiveSubmenuItemCompleted('sortOptionCompleted', currentSortFilterCompleted);
    updateActiveSubmenuItemCompleted('showOptionCompleted', currentPeriodFilterCompleted);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (optionsDropdownCompleted && !optionsDropdownCompleted.contains(e.target)) {
            hideOptionsMenuCompleted();
        }
    });
}

function updateActiveSubmenuItemCompleted(optionId, activeValue) {
    const option = document.getElementById(optionId);
    if (!option) return;
    
    const submenuItems = option.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.classList.remove('active');
        const itemValue = item.getAttribute('data-sort') || item.getAttribute('data-period');
        if (itemValue === activeValue) {
            item.classList.add('active');
        }
    });
}

function toggleOptionsMenuCompleted() {
    if (optionsDropdownCompleted) {
        optionsDropdownCompleted.classList.toggle('active');
    }
}

function hideOptionsMenuCompleted() {
    if (optionsDropdownCompleted) {
        optionsDropdownCompleted.classList.remove('active');
    }
}

// Excel Export Functions
function initializeExportYears() {
    if (!exportYear) return;
    
    const currentYear = new Date().getFullYear();
    exportYear.innerHTML = '';
    
    // Add years from 2020 to current year + 2
    for (let year = 2020; year <= currentYear + 2; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) {
            option.selected = true;
        }
        exportYear.appendChild(option);
    }
    
    // Set current month as default
    if (exportMonth) {
        exportMonth.value = new Date().getMonth();
    }
}

function showExcelExportModal() {
    excelExportModal.style.display = 'block';
}

function hideExcelExportModal() {
    excelExportModal.style.display = 'none';
}

function showExcelExportModalCompleted() {
    excelExportModal.style.display = 'block';
    // Update the export button to use completed activities export function
    const confirmBtn = document.getElementById('confirmExportBtn');
    if (confirmBtn) {
        // Remove existing event listeners
        confirmBtn.replaceWith(confirmBtn.cloneNode(true));
        const newConfirmBtn = document.getElementById('confirmExportBtn');
        newConfirmBtn?.addEventListener('click', exportCompletedActivitiesToExcel);
    }
}

// Export function specifically for completed activities
function exportCompletedActivitiesToExcel() {
    const selectedYear = parseInt(exportYear.value);
    const selectedMonth = parseInt(exportMonth.value);
    
    // Get all completed activities for the current user in the selected month
    const allCompletedActivities = getAllCompletedActivitiesForMonth(selectedYear, selectedMonth);
    
    if (allCompletedActivities.length === 0) {
        alert('No hay actividades completadas para exportar en el mes seleccionado.');
        return;
    }
    
    // Generate and download Excel file in proper XLS format
    downloadExcelFileXLSCompleted(allCompletedActivities, selectedYear, selectedMonth);
    
    hideExcelExportModal();
}

// Get all completed activities for a specific month
function getAllCompletedActivitiesForMonth(year, month) {
    const allActivities = [];
    
    if (!currentUser) return allActivities;
    
    // Get completed activities from the completedActivities data structure
    const userCompletedActivities = completedActivities[currentUser];
    if (!userCompletedActivities || userCompletedActivities.length === 0) return allActivities;
    
    // Filter completed activities by the specified month and year
    userCompletedActivities.forEach(activity => {
        // Use completedAt date if available, otherwise use createdAt
        const activityDate = new Date(activity.completedAt || activity.createdAt);
        
        if (activityDate.getFullYear() === year && activityDate.getMonth() === month) {
            const formattedDate = activityDate.toLocaleDateString('es-ES');
            const formattedTime = activityDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            
            allActivities.push({
                nombre: activity.personName || 'N/A',
                institucion: activity.institution || 'N/A',
                asunto: activity.subject || 'N/A',
                comentarios: activity.comments || 'N/A',
                fecha: formattedDate,
                hora: formattedTime,
                tipo: 'Completada',
                fechaCreacion: new Date(activity.createdAt).toLocaleDateString('es-ES')
            });
        }
    });
    
    return allActivities;
}

// Download Excel file specifically for completed activities
function downloadExcelFileXLSCompleted(activities, year, month) {
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    // Create HTML table structure for Excel
    let htmlContent = `
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; font-weight: bold; }
            </style>
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Institución</th>
                        <th>Asunto</th>
                        <th>Comentarios</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Tipo</th>
                        <th>Fecha Creación</th>
                    </tr>
                </thead>
                <tbody>`;
    
    // Add data rows
    activities.forEach(activity => {
        htmlContent += `
                    <tr>
                        <td>${activity.nombre}</td>
                        <td>${activity.institucion}</td>
                        <td>${activity.asunto}</td>
                        <td>${activity.comentarios}</td>
                        <td>${activity.fecha}</td>
                        <td>${activity.hora}</td>
                        <td>${activity.tipo}</td>
                        <td>${activity.fechaCreacion}</td>
                    </tr>`;
    });
    
    htmlContent += `
                </tbody>
            </table>
        </body>
        </html>`;
    
    // Create and download file
    const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `actividades_completadas_${monthNames[month]}_${year}.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Apply filters specifically for completed activities
function applyCompletedActivityFilters(activities) {
    let filteredActivities = [...activities];
    
    // Apply period filter based on completion date
    if (currentPeriodFilterCompleted !== 'all') {
        const now = new Date();
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        filteredActivities = filteredActivities.filter(activity => {
            const activityDate = new Date(activity.completedAt || activity.createdAt);
            
            if (currentPeriodFilterCompleted === 'week') {
                return activityDate >= startOfWeek;
            } else if (currentPeriodFilterCompleted === 'month') {
                return activityDate >= startOfMonth;
            }
            return true;
        });
    }
    
    // Apply sorting for completed activities
    return applySortingCompleted(filteredActivities, currentSortFilterCompleted);
}

// Sorting function specifically for completed activities
function applySortingCompleted(activities, sortType) {
    const sortedActivities = [...activities];
    
    switch (sortType) {
        case 'activityDate':
            // Sort by completion date - most recent first
            return sortedActivities.sort((a, b) => {
                const dateA = new Date(a.completedAt || a.createdAt);
                const dateB = new Date(b.completedAt || b.createdAt);
                return dateB - dateA;
            });
        case 'creationDate':
            // Sort by creation date - most recent first
            return sortedActivities.sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateB - dateA;
            });
        case 'alphabetical':
            // Sort alphabetically by subject
            return sortedActivities.sort((a, b) => {
                return a.subject.localeCompare(b.subject, 'es', { sensitivity: 'base' });
            });
        default:
            return sortedActivities;
    }
}

// Pagination Event Listeners Setup
function setupPaginationEventListeners() {
    // Main activities pagination
    prevCompletedBtn?.addEventListener('click', () => {
        if (currentCompletedPage > 1) {
            currentCompletedPage--;
            loadActivities(selectedName, selectedInstitution);
        }
    });
    
    nextCompletedBtn?.addEventListener('click', () => {
        currentCompletedPage++;
        loadActivities(selectedName, selectedInstitution);
    });
    
    prevScheduledBtn?.addEventListener('click', () => {
        if (currentScheduledPage > 1) {
            currentScheduledPage--;
            loadActivities(selectedName, selectedInstitution);
        }
    });
    
    nextScheduledBtn?.addEventListener('click', () => {
        currentScheduledPage++;
        loadActivities(selectedName, selectedInstitution);
    });
    
    // Completed activities page pagination
    prevCompletedActivitiesBtn?.addEventListener('click', () => {
        if (currentCompletedActivitiesPage > 1) {
            currentCompletedActivitiesPage--;
            loadCompletedActivitiesDisplay();
        }
    });
    
    nextCompletedActivitiesBtn?.addEventListener('click', () => {
        currentCompletedActivitiesPage++;
        loadCompletedActivitiesDisplay();
    });
}

// Pagination utility functions
function paginateArray(array, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
}

function updatePaginationControls(paginationElement, prevBtn, nextBtn, pageInfo, currentPage, totalItems, itemsPerPage) {
    if (!paginationElement || !pageInfo) return;
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) {
        paginationElement.style.display = 'none';
        return;
    }
    
    paginationElement.style.display = 'flex';
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    
    if (prevBtn) {
        prevBtn.disabled = currentPage <= 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage >= totalPages;
    }
}

function exportToExcel() {
    const selectedYear = parseInt(exportYear.value);
    const selectedMonth = parseInt(exportMonth.value);
    
    // Get all activities for the current user in the selected month
    const allUserActivities = getAllUserActivitiesForMonth(selectedYear, selectedMonth);
    
    if (allUserActivities.length === 0) {
        alert('No hay actividades para exportar en el mes seleccionado.');
        return;
    }
    
    // Create Excel data
    const excelData = createExcelData(allUserActivities);
    
    // Generate and download Excel file
    downloadExcelFile(excelData, selectedYear, selectedMonth);
    
    hideExcelExportModal();
}

function getAllUserActivitiesForMonth(year, month) {
    const allActivities = [];
    
    if (!currentUser || !names[currentUser]) return allActivities;
    
    // Iterate through all names for current user
    names[currentUser].forEach(name => {
        // Check activities for name without institution
        if (activities[name]) {
            activities[name].forEach(activity => {
                if (isActivityInMonth(activity, year, month)) {
                    allActivities.push({
                        nombre: name,
                        institucion: 'Sin institución',
                        asunto: activity.subject,
                        comentario: activity.comments,
                        fecha: activity.scheduledDate || new Date(activity.createdAt).toISOString().split('T')[0],
                        tipo: activity.scheduledDate ? 'Programada' : 'Realizada'
                    });
                }
            });
        }
        
        // Check activities for name with institutions
        if (institutions[name]) {
            institutions[name].forEach(institution => {
                const activityKey = `${name}_${institution}`;
                if (activities[activityKey]) {
                    activities[activityKey].forEach(activity => {
                        if (isActivityInMonth(activity, year, month)) {
                            allActivities.push({
                                nombre: name,
                                institucion: institution,
                                asunto: activity.subject,
                                comentario: activity.comments,
                                fecha: activity.scheduledDate || new Date(activity.createdAt).toISOString().split('T')[0],
                                tipo: activity.scheduledDate ? 'Programada' : 'Realizada'
                            });
                        }
                    });
                }
            });
        }
    });
    
    return allActivities;
}

function isActivityInMonth(activity, year, month) {
    const activityDate = activity.scheduledDate ? 
        new Date(activity.scheduledDate) : 
        new Date(activity.createdAt);
    
    return activityDate.getFullYear() === year && activityDate.getMonth() === month;
}

function createExcelData(activities) {
    // Create header row
    const headers = ['Nombre', 'Institución', 'Asunto', 'Comentario', 'Fecha', 'Tipo'];
    
    // Create data rows
    const rows = activities.map(activity => [
        activity.nombre,
        activity.institucion,
        activity.asunto,
        activity.comentario,
        activity.fecha,
        activity.tipo
    ]);
    
    return [headers, ...rows];
}

function downloadExcelFileXLS(activities, year, month) {
    // Create proper Excel workbook structure
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    // Create HTML table structure for Excel
    let htmlContent = `
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #000; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; font-weight: bold; }
            </style>
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Institución</th>
                        <th>Asunto</th>
                        <th>Comentarios</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Tipo</th>
                        <th>Fecha Creación</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Add data rows
    activities.forEach(activity => {
        htmlContent += `
                    <tr>
                        <td>${activity.nombre}</td>
                        <td>${activity.institucion}</td>
                        <td>${activity.asunto}</td>
                        <td>${activity.comentarios}</td>
                        <td>${activity.fecha}</td>
                        <td>${activity.hora}</td>
                        <td>${activity.tipo}</td>
                        <td>${activity.fechaCreacion}</td>
                    </tr>`;
    });
    
    htmlContent += `
                </tbody>
            </table>
        </body>
        </html>
    `;
    
    // Create blob with Excel MIME type
    const blob = new Blob([htmlContent], { 
        type: 'application/vnd.ms-excel;charset=utf-8;' 
    });
    
    // Create download link
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `Actividades_${monthNames[month]}_${year}.xls`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// Activity Detail Modal Functions
function showActivityDetail(activity) {
    currentActivity = activity;
    
    // Populate modal with activity details
    if (activityDetailTitle) {
        activityDetailTitle.textContent = 'Detalles de la Actividad';
    }
    
    if (activityDetailDate) {
        let dateText;
        if (activity.scheduledDate) {
            // Handle both old format (date string) and new format (ISO string)
            let scheduledDate;
            if (activity.scheduledDate.includes('T')) {
                // New ISO format
                scheduledDate = new Date(activity.scheduledDate);
            } else {
                // Old format - parse the date string correctly to avoid timezone issues
                const [year, month, day] = activity.scheduledDate.split('-').map(Number);
                scheduledDate = new Date(year, month - 1, day);
            }
            
            const formattedDate = scheduledDate.toLocaleDateString('es-ES');
            const formattedTime = scheduledDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            dateText = `Programada: ${formattedDate} ${formattedTime}`;
        } else {
            const createdDate = new Date(activity.createdAt);
            const formattedDate = createdDate.toLocaleDateString('es-ES');
            const formattedTime = createdDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            dateText = `Realizada: ${formattedDate} ${formattedTime}`;
        }
        activityDetailDate.textContent = dateText;
    }
    
    if (activityDetailSubject) {
        activityDetailSubject.innerHTML = `<strong>Asunto:</strong> ${activity.subject}`;
    }
    
    if (activityDetailComments) {
        activityDetailComments.innerHTML = `
            <strong>Detalles:</strong><br>
            <strong>Nombre:</strong> ${activity.personName || selectedName}<br>
            <strong>Institución:</strong> ${activity.institution}<br>
            <strong>Comentarios:</strong> ${activity.comments}
        `;
    }
    
    // Show shared activity note if applicable
    if (sharedByNote && sharedByUser) {
        if (activity.isShared && activity.sharedBy) {
            sharedByUser.textContent = activity.sharedBy;
            sharedByNote.style.display = 'block';
        } else {
            sharedByNote.style.display = 'none';
        }
    }
    
    // Show the modal
    if (activityDetailModal) {
        activityDetailModal.style.display = 'flex';
    }
}

function hideActivityDetailModal() {
    if (activityDetailModal) {
        activityDetailModal.style.display = 'none';
    }
    currentActivity = null;
    isInlineEditing = false;
    
    // Reset edit button if needed
    const editBtn = document.getElementById('editActivityBtn');
    if (editBtn) {
        editBtn.textContent = 'Modificar';
        editBtn.classList.remove('save-mode');
    }
}

function handleEditActivity() {
    if (!currentActivity) return;
    
    if (!isInlineEditing) {
        // Start inline editing
        startInlineEditing();
    } else {
        // Save inline edits
        saveInlineEdits();
    }
}

function startInlineEditing() {
    isInlineEditing = true;
    
    // Change button text and style
    const editBtn = document.getElementById('editActivityBtn');
    if (editBtn) {
        editBtn.textContent = 'Guardar';
        editBtn.classList.add('save-mode');
    }
    
    // Make date editable for scheduled activities
    const dateSpan = document.getElementById('activityDetailDate');
    if (dateSpan && currentActivity.scheduledDate) {
        const activityDate = new Date(currentActivity.scheduledDate);
        const dateStr = activityDate.toISOString().split('T')[0];
        const timeStr = activityDate.toTimeString().slice(0, 5);
        
        dateSpan.innerHTML = `
            <div class="date-time-container">
                <label>Fecha:</label>
                <input type="date" id="editDate" value="${dateStr}">
                <label>Hora:</label>
                <input type="time" id="editTime" value="${timeStr}">
            </div>
        `;
    }
    
    // Make subject editable
    const subjectSpan = document.getElementById('activityDetailSubject');
    if (subjectSpan) {
        const currentSubject = currentActivity.subject;
        subjectSpan.innerHTML = `<input type="text" id="editSubject" value="${currentSubject}" maxlength="30" style="width: 100%; padding: 4px; border: 1px solid #ddd; border-radius: 4px;">`;
    }
    
    // Make comments editable
    const commentsDiv = document.getElementById('activityDetailComments');
    if (commentsDiv) {
        const currentComments = currentActivity.comments;
        commentsDiv.innerHTML = `
            <strong>Detalles:</strong><br>
            <strong>Nombre:</strong> ${currentActivity.personName || selectedName}<br>
            <strong>Institución:</strong> ${currentActivity.institution}<br>
            <strong>Comentarios:</strong> <textarea id="editComments" maxlength="500" style="width: 100%; min-height: 60px; padding: 4px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">${currentComments}</textarea>
        `;
    }
}

function saveInlineEdits() {
    if (!currentActivity || !selectedName || !selectedInstitution || !currentUser) return;
    
    // Get edited values
    const editSubjectInput = document.getElementById('editSubject');
    const editCommentsInput = document.getElementById('editComments');
    const editDateInput = document.getElementById('editDate');
    const editTimeInput = document.getElementById('editTime');
    
    if (!editSubjectInput || !editCommentsInput) return;
    
    const newSubject = sanitizeInput(editSubjectInput.value.trim());
    const newComments = sanitizeInput(editCommentsInput.value.trim());
    
    // Handle date editing for scheduled activities
    let newScheduledDate = null;
    if (editDateInput && editTimeInput && currentActivity.scheduledDate) {
        const dateValue = editDateInput.value;
        const timeValue = editTimeInput.value;
        
        if (dateValue && timeValue) {
            newScheduledDate = new Date(`${dateValue}T${timeValue}`);
            
            // Validate that the new date is not in the past
            const now = new Date();
            if (newScheduledDate < now) {
                alert('La fecha programada no puede ser en el pasado.');
                return;
            }
        }
    }
    
    // Validation
    if (!newSubject) {
        alert('El asunto no puede estar vacío.');
        return;
    }
    
    if (!newComments) {
        alert('Los comentarios no pueden estar vacíos.');
        return;
    }
    
    if (newComments.length > 500) {
        alert('Los comentarios no pueden exceder 500 caracteres.');
        return;
    }
    
    // Update the activity
    const previousActivitySnapshot = { ...currentActivity };
    currentActivity.subject = newSubject;
    currentActivity.comments = newComments;
    
    // Update scheduled date if it was edited
    if (newScheduledDate && currentActivity.scheduledDate) {
        currentActivity.scheduledDate = newScheduledDate.toISOString();
    }
    
    // Check if this is a shared activity that we're editing
    const isSharedActivity = currentActivity.isShared && currentActivity.sharedBy && currentActivity.originalOwner;
    
    if (isSharedActivity && currentActivity.originalOwner !== currentUser) {
        // This is a shared activity being edited by a recipient
        // Update the original activity first, then propagate to all copies
        updateOriginalAndAllSharedCopies(currentActivity, newSubject, newComments, previousActivitySnapshot);
    } else {
        // This is either an original activity or a shared activity being edited by the owner
        // Find and update the activity in current user's storage
        const userActivities = activities[currentUser]?.[selectedName]?.[selectedInstitution];
        if (userActivities) {
            const activityIndex = userActivities.findIndex(a => a.id === currentActivity.id);
            if (activityIndex !== -1) {
                userActivities[activityIndex] = currentActivity;
                
                // Update shared copies if necessary
                try {
                    updateSharedActivityCopies(currentActivity, selectedInstitution, previousActivitySnapshot);
                } catch (err) {
                    console.error('Error updating shared activity copies:', err);
                }
            }
        }
    }
    
    // Save to storage
    saveToStorage('activities', activities);
    
    // Show success message
    alert('Actividad guardada exitosamente.');
    
    // Refresh the activity display
    loadActivities(selectedName, selectedInstitution);
    renderCalendar();
    
    // Exit editing mode and close modal
    exitInlineEditing();
    hideActivityDetailModal();
}

function exitInlineEditing() {
    isInlineEditing = false;
    
    // Reset button
    const editBtn = document.getElementById('editActivityBtn');
    if (editBtn) {
        editBtn.textContent = 'Modificar';
        editBtn.classList.remove('save-mode');
    }
    
    // Refresh the activity detail display with updated information
    if (currentActivity) {
        refreshActivityDetailDisplay();
        // Refresh the activity lists to show updated information
        refreshActivityLists();
    }
}

function refreshActivityDetailDisplay() {
    if (!currentActivity) return;
    
    // Update date display
    if (activityDetailDate) {
        let dateText;
        if (currentActivity.scheduledDate) {
            // Handle both old format (date string) and new format (ISO string)
            let scheduledDate;
            if (currentActivity.scheduledDate.includes('T')) {
                // New ISO format
                scheduledDate = new Date(currentActivity.scheduledDate);
            } else {
                // Old format - parse the date string correctly to avoid timezone issues
                const [year, month, day] = currentActivity.scheduledDate.split('-').map(Number);
                scheduledDate = new Date(year, month - 1, day);
            }
            
            const formattedDate = scheduledDate.toLocaleDateString('es-ES');
            const formattedTime = scheduledDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            dateText = `Programada: ${formattedDate} ${formattedTime}`;
        } else {
            const createdDate = new Date(currentActivity.createdAt);
            const formattedDate = createdDate.toLocaleDateString('es-ES');
            const formattedTime = createdDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            dateText = `Realizada: ${formattedDate} ${formattedTime}`;
        }
        activityDetailDate.textContent = dateText;
    }
    
    // Update subject display
    if (activityDetailSubject) {
        activityDetailSubject.textContent = currentActivity.subject;
    }
    
    // Update comments display
    if (activityDetailComments) {
        activityDetailComments.innerHTML = `
            <strong>Detalles:</strong><br>
            <strong>Nombre:</strong> ${currentActivity.personName || selectedName}<br>
            <strong>Institución:</strong> ${currentActivity.institution}<br>
            <strong>Comentarios:</strong> ${currentActivity.comments}
        `;
    }
}

function refreshActivityLists() {
    // Function exists but doesn't need to call undefined functions
    // Activities will be refreshed through other means
}

// Fixed Excel Export Functions
function exportToExcel() {
    if (!selectedName) {
        alert('Por favor, selecciona un nombre para exportar sus actividades.');
        return;
    }
    
    const selectedYear = parseInt(exportYear.value);
    const selectedMonth = parseInt(exportMonth.value);
    
    // Get all activities for the selected name and month
    const allActivities = getAllActivitiesForNameAndMonth(selectedName, selectedYear, selectedMonth);
    
    if (allActivities.length === 0) {
        alert('No hay actividades para exportar en el mes seleccionado.');
        return;
    }
    
    // Generate and download Excel file in proper XLS format
    downloadExcelFileXLS(allActivities, selectedYear, selectedMonth);
    
    hideExcelExportModal();
}

function getAllActivitiesForNameAndMonth(name, year, month) {
    const allActivities = [];
    
    if (!currentUser || !name) return allActivities;
    
    // Get activities from the current data structure
    const userActivities = activities[currentUser];
    if (!userActivities || !userActivities[name]) return allActivities;
    
    // Iterate through all institutions for this name
    Object.keys(userActivities[name]).forEach(institution => {
        const institutionActivities = userActivities[name][institution] || [];
        
        institutionActivities.forEach(activity => {
            if (isActivityInMonth(activity, year, month)) {
                // Use activity date (scheduled date if exists, otherwise creation date)
                const activityDate = activity.scheduledDate ? 
                    new Date(activity.scheduledDate) : 
                    new Date(activity.createdAt);
                
                const formattedDate = activityDate.toLocaleDateString('es-ES');
                const formattedTime = activity.scheduledDate && activity.scheduledTime ? 
                    activity.scheduledTime : 
                    activityDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
                
                allActivities.push({
                    nombre: name,
                    institucion: institution,
                    asunto: activity.subject,
                    comentarios: activity.comments,
                    fecha: formattedDate,
                    hora: formattedTime,
                    tipo: activity.scheduledDate ? 'Programada' : 'Realizada',
                    fechaCreacion: new Date(activity.createdAt).toLocaleDateString('es-ES')
                });
            }
        });
    });
    
    return allActivities;
}

function createExcelData(activities) {
    // Create header row
    const headers = ['Nombre', 'Institución', 'Asunto', 'Comentarios', 'Fecha', 'Hora', 'Tipo', 'Fecha Creación'];
    
    // Create data rows
    const rows = activities.map(activity => [
        activity.nombre,
        activity.institucion,
        activity.asunto,
        activity.comentarios,
        activity.fecha,
        activity.hora,
        activity.tipo,
        activity.fechaCreacion
    ]);
    
    return [headers, ...rows];
}


// Fixed Activity Filter Functions
function applyActivityFilters(activities) {
    let filteredActivities = [...activities];
    
    // Apply period filter based on activity date (not creation date)
    if (currentPeriodFilter !== 'all') {
        const now = new Date();
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        filteredActivities = filteredActivities.filter(activity => {
            // Use activity date (scheduled date if exists, otherwise creation date)
            const activityDate = activity.scheduledDate ? 
                new Date(activity.scheduledDate) : 
                new Date(activity.createdAt);
            
            if (currentPeriodFilter === 'week') {
                return activityDate >= startOfWeek;
            } else if (currentPeriodFilter === 'month') {
                return activityDate >= startOfMonth;
            }
            return true;
        });
    }
    
    // Apply sort filter
    filteredActivities.sort((a, b) => {
        if (currentSortFilter === 'activityDate') {
            // Sort by activity date (scheduled date if exists, otherwise creation date)
            const dateA = a.scheduledDate ? new Date(a.scheduledDate) : new Date(a.createdAt);
            const dateB = b.scheduledDate ? new Date(b.scheduledDate) : new Date(b.createdAt);
            return dateB - dateA; // Most recent first
        } else if (currentSortFilter === 'creationDate') {
            // Sort by creation date
            return new Date(b.createdAt) - new Date(a.createdAt); // Most recent first
        } else if (currentSortFilter === 'alphabetical') {
            // Sort alphabetically by subject
            return a.subject.localeCompare(b.subject);
        }
        return 0;
    });
    
    return filteredActivities;
}


// Task Management Functions
function generateTaskId() {
    return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function showActiveTasks() {
    hideAllPages();
    activeTasksPage?.classList.add('active');
    updateCurrentUserDisplay('Tasks');
    displayActiveTasks();
    closeAllDropdowns();
}

function showCompletedTasks() {
    hideAllPages();
    completedTasksPage?.classList.add('active');
    updateCurrentUserDisplay('CompletedTasks');
    displayCompletedTasks();
    closeAllDropdowns();
}

function updateCurrentUserDisplay(suffix) {
    const currentUserElement = document.getElementById(`currentUser${suffix}`);
    if (currentUserElement && currentUser) {
        currentUserElement.textContent = currentUser;
    }
}

function displayActiveTasks() {
    const activeTasksList = document.getElementById('activeTasksList');
    const noActiveTasksMessage = document.getElementById('noActiveTasksMessage');
    
    if (!activeTasksList || !currentUser) return;
    
    activeTasksList.innerHTML = '';
    
    const userTasks = activeTasks[currentUser] || [];
    
    if (userTasks.length === 0) {
        noActiveTasksMessage.style.display = 'block';
        return;
    }
    
    noActiveTasksMessage.style.display = 'none';
    
    userTasks.forEach(task => {
        const card = createActiveTaskCard(task);
        activeTasksList.appendChild(card);
    });
}

function createActiveTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = `
        <div class="task-card-header">
            <div class="task-card-info">
                <div class="task-card-date">${formatDate(task.createdAt)}</div>
                <div class="task-card-name">${escapeHtml(task.name)}</div>
            </div>
            <div class="task-card-actions">
                <button class="task-card-add-comment" onclick="openCommentModal('${task.id}')">
                    Agregar Comentario
                </button>
                <button class="task-card-delete" onclick="deleteActiveTask('${task.id}')">
                    Completar
                </button>
            </div>
        </div>
        <div class="task-card-comments">
            <div class="task-card-comments-title">Comentarios:</div>
            ${task.comments && task.comments.length > 0 ? 
                task.comments.map((comment, index) => {
                    // Handle both old format (string) and new format (object)
                    const commentText = typeof comment === 'string' ? comment : comment.text;
                    const commentTime = typeof comment === 'object' && comment.timestamp ? 
                        formatDateTime(comment.timestamp) : '';
                    const isCompleted = typeof comment === 'object' && comment.completed ? comment.completed : false;
                    const commentId = `${task.id}_comment_${index}`;
                    return `<div class="task-card-comment-item ${isCompleted ? 'completed' : ''}">
                        <div class="comment-content">
                            <input type="checkbox" id="${commentId}" class="comment-checkbox" 
                                ${isCompleted ? 'checked' : ''} 
                                onchange="toggleCommentStatus('${task.id}', ${index})">
                            <label for="${commentId}" class="comment-label">
                                <div class="comment-text">${escapeHtml(commentText)}</div>
                                ${commentTime ? `<div class="comment-timestamp">${commentTime}</div>` : ''}
                            </label>
                        </div>
                    </div>`;
                }).join('') : 
                '<div class="task-card-no-comments">Sin comentarios</div>'
            }
        </div>
    `;
    return card;
}

function displayCompletedTasks() {
    const completedTasksList = document.getElementById('completedTasksList');
    const noCompletedTasksMessage = document.getElementById('noCompletedTasksMessage');
    
    if (!completedTasksList || !currentUser) return;
    
    completedTasksList.innerHTML = '';
    
    const userCompletedTasks = completedTasks[currentUser] || [];
    
    if (userCompletedTasks.length === 0) {
        noCompletedTasksMessage.style.display = 'block';
        return;
    }
    
    noCompletedTasksMessage.style.display = 'none';
    
    userCompletedTasks.forEach(task => {
        const card = createCompletedTaskCard(task);
        completedTasksList.appendChild(card);
    });
}

function createCompletedTaskCard(task) {
    const card = document.createElement('div');
    card.className = 'task-card completed-task-card';
    card.innerHTML = `
        <div class="task-card-header">
            <div class="task-card-info">
                <div class="task-card-date">Creada: ${formatDate(task.createdAt)}</div>
                <div class="task-card-date completed-date">Completada: ${formatDate(task.completedAt)}</div>
                <div class="task-card-name">${escapeHtml(task.name)}</div>
            </div>
            <div class="task-card-actions">
                <button class="task-card-delete" onclick="deleteCompletedTask('${task.id}')">
                    Eliminar
                </button>
            </div>
        </div>
        <div class="task-card-comments">
            <div class="task-card-comments-title">Comentarios:</div>
            ${task.comments && task.comments.length > 0 ? 
                task.comments.map((comment, index) => {
                    // Handle both old format (string) and new format (object)
                    const commentText = typeof comment === 'string' ? comment : comment.text;
                    const commentTime = typeof comment === 'object' && comment.timestamp ? 
                        new Date(comment.timestamp).toLocaleString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : '';
                    
                    return `<div class="task-card-comment-item completed">
                        <div class="comment-content">
                            <div class="comment-text">${escapeHtml(commentText)}</div>
                            ${commentTime ? `<div class="comment-timestamp">${commentTime}</div>` : ''}
                        </div>
                    </div>`;
                }).join('') : 
                '<div class="task-card-no-comments">Sin comentarios</div>'
            }
        </div>
    `;
    return card;
}

function openTaskModal() {
    const taskModal = document.getElementById('taskModal');
    const taskForm = document.getElementById('taskForm');
    
    if (taskModal && taskForm) {
        taskForm.reset();
        updateTaskCharacterCounters();
        taskModal.style.display = 'block';
    }
}

function closeTaskModal() {
    const taskModal = document.getElementById('taskModal');
    const taskForm = document.getElementById('taskForm');
    
    if (taskModal) {
        taskModal.style.display = 'none';
    }
    
    if (taskForm) {
        taskForm.reset();
    }
    
    // Reset character counters
    updateTaskCharacterCounters();
}

function openCommentModal(taskId) {
    // Prevent any potential conflicts with activity modals
    event?.stopPropagation();
    
    currentTaskId = taskId;
    const commentModal = document.getElementById('taskCommentModal');
    const commentForm = document.getElementById('taskCommentForm');
    
    // Ensure we're on the active tasks page
    hideAllPages();
    const activeTasksPage = document.getElementById('activeTasksPage');
    if (activeTasksPage) {
        activeTasksPage.classList.add('active');
    }
    
    if (commentModal && commentForm) {
        commentForm.reset();
        updateCommentCharacterCounter();
        commentModal.style.display = 'block';
    }
}

function closeCommentModal() {
    const commentModal = document.getElementById('taskCommentModal');
    if (commentModal) {
        commentModal.style.display = 'none';
    }
    currentTaskId = null;
}

function createTask(event) {
    event.preventDefault();
    
    const taskName = document.getElementById('taskName')?.value.trim();
    const taskDescription = document.getElementById('taskDescription')?.value.trim();
    
    if (!taskName || !currentUser) {
        alert('Por favor completa todos los campos requeridos.');
        return;
    }
    
    const newTask = {
        id: generateTaskId(),
        name: taskName,
        description: taskDescription,
        createdAt: new Date().toISOString(),
        comments: []
    };
    
    // Add description as first comment if provided
    if (taskDescription) {
        newTask.comments.push({
            text: taskDescription,
            timestamp: new Date().toISOString()
        });
    }
    
    if (!activeTasks[currentUser]) {
        activeTasks[currentUser] = [];
    }
    
    activeTasks[currentUser].push(newTask);
    saveToStorage('activeTasks', activeTasks);
    
    // Ensure we stay on the active tasks page
    hideAllPages();
    activeTasksPage?.classList.add('active');
    
    displayActiveTasks();
    closeTaskModal();
    
    alert('Tarea creada exitosamente');
}

function addTaskComment(event) {
    event.preventDefault();
    
    const comment = document.getElementById('taskComment')?.value.trim();
    
    if (!comment || !currentTaskId || !currentUser) {
        alert('Por favor ingresa un comentario.');
        return;
    }
    
    const userActiveTasks = activeTasks[currentUser] || [];
    const task = userActiveTasks.find(t => t.id === currentTaskId);
    if (task) {
        if (!task.comments) {
            task.comments = [];
        }
        task.comments.push({
            text: comment,
            timestamp: new Date().toISOString()
        });
        saveToStorage('activeTasks', activeTasks);
        
        // Just refresh the current display without changing pages
        displayActiveTasks();
        closeCommentModal();
        alert('Comentario agregado exitosamente');
    }
}

function toggleCommentStatus(taskId, commentIndex) {
    if (!currentUser) return;
    
    const userActiveTasks = activeTasks[currentUser] || [];
    const task = userActiveTasks.find(t => t.id === taskId);
    
    if (task && task.comments && task.comments[commentIndex]) {
        const comment = task.comments[commentIndex];
        
        // Convert string comments to object format if needed
        if (typeof comment === 'string') {
            task.comments[commentIndex] = {
                text: comment,
                timestamp: new Date().toISOString(),
                completed: true
            };
        } else {
            // Toggle completed status
            task.comments[commentIndex].completed = !comment.completed;
        }
        
        saveToStorage('activeTasks', activeTasks);
        displayActiveTasks();
    }
}

function deleteActiveTask(taskId) {
    if (!currentUser) return;
    
    if (confirm('¿Estás seguro de que deseas completar esta tarea?')) {
        const userActiveTasks = activeTasks[currentUser] || [];
        const taskIndex = userActiveTasks.findIndex(task => task.id === taskId);
        
        if (taskIndex !== -1) {
            const task = userActiveTasks[taskIndex];
            task.completedAt = new Date().toISOString();
            
            // Move to completed tasks
            if (!completedTasks[currentUser]) {
                completedTasks[currentUser] = [];
            }
            completedTasks[currentUser].push(task);
            
            // Remove from active tasks
            userActiveTasks.splice(taskIndex, 1);
            
            saveToStorage('activeTasks', activeTasks);
            saveToStorage('completedTasks', completedTasks);
            displayActiveTasks();
            alert('Tarea completada exitosamente');
        }
    }
}

function completeTask(taskId) {
    if (!currentUser) return;
    
    const userActiveTasks = activeTasks[currentUser] || [];
    const taskIndex = userActiveTasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        const task = userActiveTasks[taskIndex];
        task.completedAt = new Date().toISOString();
        
        // Move to completed tasks
        if (!completedTasks[currentUser]) {
            completedTasks[currentUser] = [];
        }
        completedTasks[currentUser].push(task);
        
        // Remove from active tasks
        userActiveTasks.splice(taskIndex, 1);
        
        saveToStorage('activeTasks', activeTasks);
        saveToStorage('completedTasks', completedTasks);
        
        displayActiveTasks();
        alert('Tarea completada exitosamente');
    }
}


function deleteCompletedTask(taskId) {
    if (!currentUser) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea completada?')) {
        const userCompletedTasks = completedTasks[currentUser] || [];
        const taskIndex = userCompletedTasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            userCompletedTasks.splice(taskIndex, 1);
            saveToStorage('completedTasks', completedTasks);
            displayCompletedTasks();
            alert('Tarea eliminada exitosamente');
        }
    }
}

function updateTaskCharacterCounters() {
    const taskNameInput = document.getElementById('taskName');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const taskNameCounter = document.getElementById('taskNameCounter');
    const taskDescriptionCounter = document.getElementById('taskDescriptionCounter');
    
    if (taskNameInput && taskNameCounter) {
        taskNameCounter.textContent = `${taskNameInput.value.length}/100`;
    }
    
    if (taskDescriptionInput && taskDescriptionCounter) {
        taskDescriptionCounter.textContent = `${taskDescriptionInput.value.length}/300`;
    }
}

function updateCommentCharacterCounter() {
    const commentInput = document.getElementById('taskComment');
    const commentCounter = document.getElementById('taskCommentCounter');
    
    if (commentInput && commentCounter) {
        commentCounter.textContent = `${commentInput.value.length}/500`;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Task dropdown functions for all pages
function toggleMenuDropdownTasks(event) {
    event.stopPropagation();
    const menuDropdownTasks = document.getElementById('menuDropdownTasks');
    const menuDropdownBtnTasks = document.getElementById('menuDropdownBtnTasks');
    const isOpen = menuDropdownTasks?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownTasks.style.display = 'block';
        menuDropdownBtnTasks?.classList.add('active');
    }
}

function toggleUserDropdownTasks(event) {
    event.stopPropagation();
    const userDropdownTasks = document.getElementById('userDropdownTasks');
    const userDropdownBtnTasks = document.getElementById('userDropdownBtnTasks');
    const isOpen = userDropdownTasks?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownTasks.style.display = 'block';
        userDropdownBtnTasks?.classList.add('active');
    }
}

function toggleUserDropdownCompletedTasks(event) {
    event.stopPropagation();
    const userDropdownCompletedTasks = document.getElementById('userDropdownCompletedTasks');
    const userDropdownBtnCompletedTasks = document.getElementById('userDropdownBtnCompletedTasks');
    const isOpen = userDropdownCompletedTasks?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownCompletedTasks.style.display = 'block';
        userDropdownBtnCompletedTasks?.classList.add('active');
    }
}

function toggleMenuDropdownCompletedTasks(event) {
    event.stopPropagation();
    const menuDropdownCompletedTasks = document.getElementById('menuDropdownCompletedTasks');
    const menuDropdownBtnCompletedTasks = document.getElementById('menuDropdownBtnCompletedTasks');
    const isOpen = menuDropdownCompletedTasks?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownCompletedTasks.style.display = 'block';
        menuDropdownBtnCompletedTasks?.classList.add('active');
    }
}

// Notes page dropdown functions
function toggleMenuDropdownNotes(event) {
    event?.stopPropagation();
    const menuDropdownNotes = document.getElementById('menuDropdownNotes');
    const menuDropdownBtnNotes = document.getElementById('menuDropdownBtnNotes');
    const isOpen = menuDropdownNotes?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownNotes.style.display = 'block';
        menuDropdownBtnNotes?.classList.add('active');
    }
}

function toggleUserDropdownNotes(event) {
    event?.stopPropagation();
    const userDropdownNotes = document.getElementById('userDropdownNotes');
    const userDropdownBtnNotes = document.getElementById('userDropdownBtnNotes');
    const isOpen = userDropdownNotes?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownNotes.style.display = 'block';
        userDropdownBtnNotes?.classList.add('active');
    }
}

function toggleNotificationsDropdownNotes() {
    const notificationsDropdown = document.getElementById('notificationsDropdownNotes');
    if (notificationsDropdown) {
        notificationsDropdown.style.display = notificationsDropdown.style.display === 'block' ? 'none' : 'block';
    }
}

function clearAllUserNotificationsNotes() {
    clearAllUserNotifications();
}

// Create notification for shared note
function createSharedNoteNotification(targetUser, note, sharedBy) {
    if (!notifications[targetUser]) {
        notifications[targetUser] = [];
    }
    
    const notification = {
        id: Date.now().toString(),
        type: 'shared_note',
        message: `${sharedBy} ha compartido una nota contigo: "${note.subject}"`,
        noteId: note.id,
        sharedBy: sharedBy,
        createdAt: new Date().toISOString(),
        read: false
    };
    
    notifications[targetUser].push(notification);
    saveToStorage('notifications', notifications);
}

// Show shared notes page
function showSharedNotes() {
    hideAllPages();
    document.getElementById('sharedNotesPage').style.display = 'block';
    
    // Update current user display
    const currentUserShared = document.getElementById('currentUserShared');
    if (currentUserShared && currentUser) {
        currentUserShared.textContent = currentUser;
    }
    
    displaySharedNotes();
    closeAllDropdowns();
}

// Display shared notes - API VERSION
async function displaySharedNotes() {
    const sharedNotesList = document.getElementById('sharedNotesList');
    const noSharedNotesMessage = document.getElementById('noSharedNotesMessage');
    
    if (!sharedNotesList || !currentUser) return;
    
    sharedNotesList.innerHTML = '';
    
    try {
        const userSharedNotes = await apiGetSharedNotes();
        
        if (userSharedNotes.length === 0) {
            noSharedNotesMessage.style.display = 'block';
            return;
        }
        
        noSharedNotesMessage.style.display = 'none';
        
        userSharedNotes.forEach(note => {
            const noteCard = createSharedNoteCard(note);
            sharedNotesList.appendChild(noteCard);
        });
    } catch (error) {
        console.error('Error loading shared notes:', error);
        noSharedNotesMessage.style.display = 'block';
    }
}

// Create shared note card (with edit functionality for both participants)
function createSharedNoteCard(note) {
    const card = document.createElement('div');
    card.className = 'task-card note-card';
    
    // Determine who shared the note and show appropriate info
    const sharedInfo = note.sharedBy === currentUser ? 
        `Compartida con: ${escapeHtml(note.sharedWith)}` : 
        `Compartida por: ${escapeHtml(note.sharedBy)}`;
    
    card.innerHTML = `
        <div class="task-card-header">
            <div class="task-card-info">
                <div class="task-card-date">Compartida: ${formatDate(note.sharedAt)}</div>
                <div class="task-card-name">${escapeHtml(note.subject)}</div>
                <div class="task-card-shared">${sharedInfo}</div>
            </div>
            <div class="task-card-actions">
                <button class="task-card-delete" onclick="deleteSharedNote('${note.id}')">
                    Eliminar
                </button>
            </div>
        </div>
        <div class="task-card-comments">
            <div class="task-card-comments-title">Comentarios:</div>
            ${note.comments && note.comments.trim() ? 
                `<div class="task-card-comment-item">
                    <div class="comment-content">
                        <div class="comment-text">${escapeHtml(note.comments)}</div>
                    </div>
                </div>` : 
                '<div class="task-card-no-comments">Sin comentarios</div>'
            }
        </div>
    `;
    
    // Add double-click event to edit shared note
    card.addEventListener('dblclick', () => showEditSharedNoteModal(note));
    
    return card;
}

// Show edit modal for shared note - NEW SYSTEM
function showEditSharedNoteModal(note) {
    const noteModal = document.getElementById('noteModal');
    const noteForm = document.getElementById('noteForm');
    const noteModalTitle = document.getElementById('noteModalTitle');
    const noteSubject = document.getElementById('noteSubject');
    const noteComments = document.getElementById('noteComments');
    const shareWithUser = document.getElementById('shareWithUser');
    
    if (!noteModal || !noteForm) return;
    
    // Set modal title
    noteModalTitle.textContent = 'Editar Nota Compartida';
    
    // Pre-fill form with note data
    noteSubject.value = note.subject || '';
    noteComments.value = note.comments || '';
    
    // Show the other participant (not current user)
    const otherParticipant = note.participants.find(p => p !== currentUser);
    shareWithUser.value = otherParticipant || '';
    shareWithUser.disabled = true; // Can't change who it's shared with
    
    // Set editing flag for shared note
    noteForm.dataset.editingSharedNoteId = note.id;
    delete noteForm.dataset.editingNoteId; // Clear personal note editing flag
    
    // Show modal
    noteModal.style.display = 'block';
    noteSubject.focus();
}

// Save shared note (handles updates to shared notes) - API VERSION
async function saveSharedNote(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    const noteForm = document.getElementById('noteForm');
    const noteSubject = document.getElementById('noteSubject').value.trim();
    const noteComments = document.getElementById('noteComments').value.trim();
    
    if (!noteSubject) {
        alert('Por favor ingrese un asunto para la nota');
        return;
    }
    
    const isEditingShared = noteForm.dataset.editingSharedNoteId;
    
    if (isEditingShared) {
        try {
            const noteData = {
                subject: noteSubject,
                comments: noteComments
            };
            
            await apiUpdateSharedNote(isEditingShared, noteData);
            
            // Clear editing flags
            delete noteForm.dataset.editingSharedNoteId;
            document.getElementById('shareWithUser').disabled = false;
            
            closeNoteModal();
            displaySharedNotes();
            alert('Nota compartida actualizada exitosamente');
        } catch (error) {
            alert('Error al actualizar la nota compartida: ' + error.message);
        }
    } else {
        // This is a regular note save, call the original function
        await saveNote(event);
    }
}

// Delete shared note (removes from server) - API VERSION
async function deleteSharedNote(noteId) {
    if (!currentUser) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar esta nota compartida? Se eliminará para todos los usuarios participantes.')) {
        try {
            await apiDeleteSharedNote(noteId);
            displaySharedNotes();
            alert('Nota compartida eliminada exitosamente');
        } catch (error) {
            alert('Error al eliminar la nota compartida: ' + error.message);
        }
    }
}

// Shared Notes page dropdown functions
function toggleMenuDropdownSharedNotes(event) {
    event?.stopPropagation();
    const menuDropdownSharedNotes = document.getElementById('menuDropdownSharedNotes');
    const menuDropdownBtnSharedNotes = document.getElementById('menuDropdownBtnSharedNotes');
    const isOpen = menuDropdownSharedNotes?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        menuDropdownSharedNotes.style.display = 'block';
        menuDropdownBtnSharedNotes?.classList.add('active');
    }
}

function toggleUserDropdownSharedNotes(event) {
    event?.stopPropagation();
    const userDropdownSharedNotes = document.getElementById('userDropdownSharedNotes');
    const userDropdownBtnSharedNotes = document.getElementById('userDropdownBtnSharedNotes');
    const isOpen = userDropdownSharedNotes?.style.display === 'block';
    
    closeAllDropdowns();
    
    if (!isOpen) {
        userDropdownSharedNotes.style.display = 'block';
        userDropdownBtnSharedNotes?.classList.add('active');
    }
}

function toggleNotificationsDropdownSharedNotes() {
    const notificationsDropdown = document.getElementById('notificationsDropdownSharedNotes');
    if (notificationsDropdown) {
        notificationsDropdown.style.display = notificationsDropdown.style.display === 'block' ? 'none' : 'block';
    }
}

function clearAllUserNotificationsSharedNotes() {
    clearAllUserNotifications();
}

// Setup task event listeners
function setupTaskEventListeners() {
    // Navigation buttons in menu dropdowns
    // Task navigation buttons for all pages
    const pendingTasksBtn = document.getElementById('pendingTasksBtn');
    const completedTasksBtn = document.getElementById('completedTasksBtn');
    const pendingTasksBtnProfile = document.getElementById('pendingTasksBtnProfile');
    const completedTasksBtnProfile = document.getElementById('completedTasksBtnProfile');
    const pendingTasksBtnCompleted = document.getElementById('pendingTasksBtnCompleted');
    const completedTasksBtnCompleted = document.getElementById('completedTasksBtnCompleted');
    const pendingTasksBtnTasks = document.getElementById('pendingTasksBtnTasks');
    const completedTasksBtnTasks = document.getElementById('completedTasksBtnTasks');
    const pendingTasksBtnCompletedTasks = document.getElementById('pendingTasksBtnCompletedTasks');
    const completedTasksBtnCompletedTasks = document.getElementById('completedTasksBtnCompletedTasks');
    
    // Add event listeners for all task navigation buttons
    pendingTasksBtn?.addEventListener('click', showActiveTasks);
    completedTasksBtn?.addEventListener('click', showCompletedTasks);
    pendingTasksBtnProfile?.addEventListener('click', showActiveTasks);
    completedTasksBtnProfile?.addEventListener('click', showCompletedTasks);
    pendingTasksBtnCompleted?.addEventListener('click', showActiveTasks);
    completedTasksBtnCompleted?.addEventListener('click', showCompletedTasks);
    pendingTasksBtnTasks?.addEventListener('click', showActiveTasks);
    completedTasksBtnTasks?.addEventListener('click', showCompletedTasks);
    pendingTasksBtnCompletedTasks?.addEventListener('click', showActiveTasks);
    completedTasksBtnCompletedTasks?.addEventListener('click', showCompletedTasks);
    
    // Task creation and modal buttons
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModalCloseBtn = document.getElementById('taskModalCloseBtn');
    const cancelTaskBtn = document.getElementById('cancelTaskBtn');
    const confirmTaskBtn = document.getElementById('confirmTaskBtn');
    
    addTaskBtn?.addEventListener('click', openTaskModal);
    taskModalCloseBtn?.addEventListener('click', closeTaskModal);
    cancelTaskBtn?.addEventListener('click', closeTaskModal);
    confirmTaskBtn?.addEventListener('click', createTask);
    
    // Add event listener for "Crear primera tarea" link
    const createFirstTaskLink = document.getElementById('createFirstTask');
    createFirstTaskLink?.addEventListener('click', (e) => {
        e.preventDefault();
        openTaskModal();
    });
    
    // Add form submit event listener to prevent default submission
    const taskForm = document.getElementById('taskForm');
    taskForm?.addEventListener('submit', createTask);
    
    // Comment modal buttons
    const commentModalCloseBtn = document.getElementById('commentModalCloseBtn');
    const commentModalCancelBtn = document.getElementById('cancelCommentBtn');
    const commentModalSaveBtn = document.getElementById('confirmCommentBtn');
    
    commentModalCloseBtn?.addEventListener('click', closeCommentModal);
    commentModalCancelBtn?.addEventListener('click', closeCommentModal);
    commentModalSaveBtn?.addEventListener('click', addTaskComment);
    
    // Character counters
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDescriptionInput = document.getElementById('taskDescriptionInput');
    const commentTextInput = document.getElementById('commentTextInput');
    
    taskNameInput?.addEventListener('input', () => updateCharacterCounter('taskNameInput', 'taskNameCounter', 100));
    taskDescriptionInput?.addEventListener('input', () => updateCharacterCounter('taskDescriptionInput', 'taskDescriptionCounter', 500));
    commentTextInput?.addEventListener('input', () => updateCharacterCounter('commentTextInput', 'commentCounter', 300));
    
    // Navigation between task pages
    const viewCompletedTasksBtn = document.getElementById('viewCompletedTasksBtn');
    const viewActiveTasksBtn = document.getElementById('viewActiveTasksBtn');
    const backToActiveTasksBtn = document.getElementById('backToActiveTasksBtn');
    
    viewCompletedTasksBtn?.addEventListener('click', showCompletedTasks);
    viewActiveTasksBtn?.addEventListener('click', showActiveTasks);
    backToActiveTasksBtn?.addEventListener('click', showActiveTasks);
    
    // Add event listener for back to active activities button
    const backToActiveActivitiesBtn = document.getElementById('backToActiveActivitiesBtn');
    backToActiveActivitiesBtn?.addEventListener('click', showDashboard);
    
    // Notes functionality
    const newNoteBtn = document.getElementById('newNoteBtn');
    const noteForm = document.getElementById('noteForm');
    const noteSubject = document.getElementById('noteSubject');
    const noteComments = document.getElementById('noteComments');
    const shareWithUser = document.getElementById('shareWithUser');
    const cancelNoteBtn = document.getElementById('cancelNoteBtn');
    
    newNoteBtn?.addEventListener('click', showNoteModal);
    cancelNoteBtn?.addEventListener('click', closeNoteModal);
    
    // Character counters for note form
    noteSubject?.addEventListener('input', updateNoteCharacterCounters);
    noteComments?.addEventListener('input', updateNoteCharacterCounters);
    
    // User suggestions for sharing
    shareWithUser?.addEventListener('input', (e) => handleUserSuggestions(e.target));
    
    // Navigation to personal notes from menu
    const personalNotesBtn = document.getElementById('personalNotesBtn');
    const personalNotesBtnProfile = document.getElementById('personalNotesBtnProfile');
    const personalNotesBtnCompleted = document.getElementById('personalNotesBtnCompleted');
    const personalNotesBtnTasks = document.getElementById('personalNotesBtnTasks');
    const personalNotesBtnCompletedTasks = document.getElementById('personalNotesBtnCompletedTasks');
    const personalNotesBtnNotes = document.getElementById('personalNotesBtnNotes');
    const personalNotesBtnSharedNotes = document.getElementById('personalNotesBtnSharedNotes');
    
    personalNotesBtn?.addEventListener('click', showPersonalNotes);
    personalNotesBtnProfile?.addEventListener('click', showPersonalNotes);
    personalNotesBtnCompleted?.addEventListener('click', showPersonalNotes);
    personalNotesBtnTasks?.addEventListener('click', showPersonalNotes);
    personalNotesBtnCompletedTasks?.addEventListener('click', showPersonalNotes);
    personalNotesBtnNotes?.addEventListener('click', showPersonalNotes);
    personalNotesBtnSharedNotes?.addEventListener('click', showPersonalNotes);
    
    // Navigation to shared notes from menu
    const sharedNotesBtn = document.getElementById('sharedNotesBtn');
    const sharedNotesBtnProfile = document.getElementById('sharedNotesBtnProfile');
    const sharedNotesBtnCompleted = document.getElementById('sharedNotesBtnCompleted');
    const sharedNotesBtnTasks = document.getElementById('sharedNotesBtnTasks');
    const sharedNotesBtnCompletedTasks = document.getElementById('sharedNotesBtnCompletedTasks');
    const sharedNotesBtnNotes = document.getElementById('sharedNotesBtnNotes');
    const sharedNotesBtnSharedNotes = document.getElementById('sharedNotesBtnSharedNotes');
    
    sharedNotesBtn?.addEventListener('click', showSharedNotes);
    sharedNotesBtnProfile?.addEventListener('click', showSharedNotes);
    sharedNotesBtnCompleted?.addEventListener('click', showSharedNotes);
    sharedNotesBtnTasks?.addEventListener('click', showSharedNotes);
    sharedNotesBtnCompletedTasks?.addEventListener('click', showSharedNotes);
    sharedNotesBtnNotes?.addEventListener('click', showSharedNotes);
    sharedNotesBtnSharedNotes?.addEventListener('click', showSharedNotes);
    
    // Notes page dropdown functionality
    document.getElementById('menuDropdownBtnNotes')?.addEventListener('click', toggleMenuDropdownNotes);
    document.getElementById('userDropdownBtnNotes')?.addEventListener('click', toggleUserDropdownNotes);
    document.getElementById('completedActivitiesBtnNotes')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnNotes')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('pendingTasksBtnNotes')?.addEventListener('click', showActiveTasks);
    document.getElementById('completedTasksBtnNotes')?.addEventListener('click', showCompletedTasks);
    document.getElementById('profileBtnNotes')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnNotes')?.addEventListener('click', handleLogout);
    document.getElementById('notificationsBtnNotes')?.addEventListener('click', toggleNotificationsDropdownNotes);
    document.getElementById('clearAllNotificationsNotes')?.addEventListener('click', clearAllUserNotificationsNotes);
    
    // Shared Notes page dropdown functionality
    document.getElementById('menuDropdownBtnSharedNotes')?.addEventListener('click', toggleMenuDropdownSharedNotes);
    document.getElementById('userDropdownBtnSharedNotes')?.addEventListener('click', toggleUserDropdownSharedNotes);
    document.getElementById('completedActivitiesBtnSharedNotes')?.addEventListener('click', showCompletedActivities);
    document.getElementById('developmentActivitiesBtnSharedNotes')?.addEventListener('click', showDevelopmentActivities);
    document.getElementById('pendingTasksBtnSharedNotes')?.addEventListener('click', showActiveTasks);
    document.getElementById('completedTasksBtnSharedNotes')?.addEventListener('click', showCompletedTasks);
    document.getElementById('profileBtnSharedNotes')?.addEventListener('click', showProfile);
    document.getElementById('logoutBtnSharedNotes')?.addEventListener('click', handleLogout);
    document.getElementById('notificationsBtnSharedNotes')?.addEventListener('click', toggleNotificationsDropdownSharedNotes);
    document.getElementById('clearAllNotificationsSharedNotes')?.addEventListener('click', clearAllUserNotificationsSharedNotes);
    
    // Options dropdown for completed tasks
    const optionsBtnCompletedTasks = document.getElementById('optionsBtnCompletedTasks');
    const optionsMenuCompletedTasks = document.getElementById('optionsMenuCompletedTasks');
    const exportOptionCompletedTasks = document.getElementById('exportOptionCompletedTasks');
    
    optionsBtnCompletedTasks?.addEventListener('click', () => {
        optionsMenuCompletedTasks.style.display = optionsMenuCompletedTasks.style.display === 'block' ? 'none' : 'block';
    });
    
    exportOptionCompletedTasks?.addEventListener('click', exportCompletedTasksToExcel);
    
    // Close options menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!optionsBtnCompletedTasks?.contains(e.target) && !optionsMenuCompletedTasks?.contains(e.target)) {
            if (optionsMenuCompletedTasks) optionsMenuCompletedTasks.style.display = 'none';
        }
    });

    // Close modals when clicking outside
    const taskModal = document.getElementById('taskModal');
    const commentModal = document.getElementById('commentModal');
    
    taskModal?.addEventListener('click', (e) => {
        if (e.target === taskModal) {
            closeTaskModal();
        }
    });
    
    commentModal?.addEventListener('click', (e) => {
        if (e.target === commentModal) {
            closeCommentModal();
        }
    });
}

// Uncomment the line below to add demo data for testing
// addDemoData();
