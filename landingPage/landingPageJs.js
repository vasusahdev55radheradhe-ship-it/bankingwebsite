// Handle Login Button Click
// document.getElementById('loginBtn').addEventListener('click', ()=>{
//     window.location.href = '../login.html';
// });
document.querySelectorAll('.login-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Login button clicked');
        window.location.href = '../loginPage/login.html';
    });
});

    // alert('Login functionality - Navigate to login page or show login modal');
    // You can replace with actual navigation or modal logic
    // window.location.href = 'login.html';

// Handle Open Account Button Click
function handleOpenAccount() {
    console.log('Open Account button clicked');
    alert('Open Account functionality - Navigate to account creation page or show account creation modal');
    // You can replace with actual navigation or modal logic
    // window.location.href = 'open-account.html';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add styles for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add active state to navigation items on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // You can add active state styling here
        }
    });
});

// Log page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('BankName landing page loaded successfully');
});
