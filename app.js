// ============ AUTHENTICATION ============
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Store user session
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields');
    }
}

function handleLogout() {
    event.preventDefault();
    
    // Clear user session
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    
    // Redirect to login
    window.location.href = 'login.html';
}

// ============ NAVIGATION ============
function navigateTo(page) {
    window.location.href = page;
}

// ============ PROFILE & SETTINGS ============
function switchTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Mark button as active
    event.target.classList.add('active');
}

function handlePasswordChange(event) {
    event.preventDefault();
    
    const currentPwd = document.getElementById('current-pwd').value;
    const newPwd = document.getElementById('new-pwd').value;
    const confirmPwd = document.getElementById('confirm-pwd').value;
    
    if (newPwd !== confirmPwd) {
        alert('New passwords do not match');
        return;
    }
    
    if (newPwd.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    
    alert('Password updated successfully');
    document.querySelector('.settings-form').reset();
}

// ============ CARDS PAGE ============
function handleNewCard() {
    alert('Redirecting to new card application');
}

function handleViewStatements() {
    alert('Loading card statements');
}

function handleSelectCard() {
    alert('Card selected. Loading card details...');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Card number copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ============ ACCOUNTS PAGE ============
function handleViewTransactions() {
    window.location.href = 'transactions.html';
}

function handleDownloadStatement() {
    alert('Downloading account statement as PDF...');
}

function handleAccountSettings() {
    alert('Opening account settings');
}

function handleAddNewAccount() {
    alert('Redirecting to account opening application');
}

// ============ TRANSFER PAGE ============
function handleTransfer(event) {
    event.preventDefault();
    
    const fromAccount = document.getElementById('from-account').value;
    const transferType = document.getElementById('transfer-type').value;
    const beneficiary = document.getElementById('beneficiary').value;
    const amount = document.getElementById('amount').value;
    
    if (!fromAccount || !transferType || !beneficiary || !amount) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (parseFloat(amount) <= 0) {
        alert('Amount must be greater than 0');
        return;
    }
    
    alert(`Transfer initiated:\nAmount: $${amount}\nBeneficiary: ${beneficiary}\n\nPlease review and confirm the transfer.`);
}

function selectBeneficiary(element) {
    const beneficiaryName = element.querySelector('.beneficiary-name').textContent;
    document.getElementById('beneficiary').value = beneficiaryName;
}

// ============ LOANS PAGE ============
function handlePayEMI() {
    alert('Redirecting to EMI payment page');
}

function handleLoanDetails() {
    alert('Loading detailed loan information');
}

function handleApplyLoan() {
    alert('Redirecting to loan application form');
}

// ============ SUPPORT PAGE ============
function handleStartChat() {
    alert('Opening live chat with support team');
}

function handleCallSupport() {
    alert('Calling BankName Support: 1-800-BANK-NOW');
}

function handleEmailSupport() {
    alert('Opening email client to send: support@bankname.com');
}

function handleTicketStatus() {
    alert('Loading your support tickets');
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('open');
}

function handleSupportForm(event) {
    event.preventDefault();
    
    const issueType = document.getElementById('issue-type').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!issueType || !subject || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    alert('Your support ticket has been submitted successfully!\nTicket ID: #' + Math.random().toString(36).substr(2, 9).toUpperCase());
    document.querySelector('.support-form').reset();
}

// ============ DASHBOARD PAGE ============
function handleOpenAccount() {
    alert('Redirecting to account opening page');
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Redirect to login if not authenticated and trying to access dashboard
    if (!isLoggedIn && (currentPage === 'dashboard.html' || 
        currentPage === 'transactions.html' || 
        currentPage === 'profile.html' || 
        currentPage === 'cards.html' || 
        currentPage === 'accounts.html' || 
        currentPage === 'transfer.html' || 
        currentPage === 'loans.html' || 
        currentPage === 'support.html' ||
        currentPage === '')) {
        
        if (currentPage !== 'login.html') {
            window.location.href = 'login.html';
        }
    }
    
    // Display user email if logged in
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail && currentPage !== 'login.html') {
        // You can display user info somewhere in the dashboard
        console.log('User logged in as:', userEmail);
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Add animation on load
    const elements = document.querySelectorAll('.account-card, .feature-card, .action-card');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 50);
    });
});

// ============ ANIMATIONS ============
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ============ UTILITY FUNCTIONS ============
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}

// ============ FORM VALIDATION ============
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateAmount(amount) {
    return !isNaN(amount) && parseFloat(amount) > 0;
}

// ============ RANGE SLIDER UPDATE ============
const rangeSliders = document.querySelectorAll('.limit-slider');
rangeSliders.forEach(slider => {
    slider.addEventListener('input', function() {
        const value = this.value;
        const maxValue = this.max;
        const percentage = (value / maxValue) * 100;
        this.style.background = `linear-gradient(to right, #16a34a 0%, #16a34a ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
        
        // Update the limit value display
        const limitValue = this.closest('.limit-item')?.querySelector('.limit-value');
        if (limitValue) {
            limitValue.textContent = '$' + parseFloat(value).toLocaleString('en-US');
        }
    });
});

// ============ TOGGLE SWITCHES ============
const toggleSwitches = document.querySelectorAll('.toggle-switch input');
toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('Toggle switched:', isChecked);
        // Add any additional logic here
    });
});
