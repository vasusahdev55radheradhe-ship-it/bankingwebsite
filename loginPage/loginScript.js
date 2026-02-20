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
        window.location.href = '../dashboard.html';
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
