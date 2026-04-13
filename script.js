// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll untuk Nav Links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 70; // Tinggi header
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        // Tutup menu mobile setelah klik
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Animation on Scroll untuk Achievement Items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Ambil semua achievement items
const achievementItems = document.querySelectorAll('.achievement-item');
achievementItems.forEach(item => {
    observer.observe(item);
});

// Tambahkan efek hover pada tombol (sudah ada di CSS, tapi bisa ditambahkan JS jika perlu)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // Efek tambahan jika diperlukan
    });
    
    btn.addEventListener('mouseleave', () => {
        // Efek tambahan jika diperlukan
    });
});