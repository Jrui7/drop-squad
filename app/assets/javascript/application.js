// application.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const ourWhySection = document.querySelector('#our-why');
  const updateNavbar = () => {
    const ourWhyBottom = ourWhySection.offsetTop + ourWhySection.offsetHeight;
    if (window.scrollY > ourWhyBottom) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNavbar);

  // Scroll progress indicator
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
      indicator.style.width = scrolled + '%';
    }
  });

  // Parallax effect for floating elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    document.querySelectorAll('.floating-ball').forEach((ball, index) => {
      const speed = 0.5 + (index * 0.2);
      ball.style.transform = `translateY(${parallax * speed}px)`;
    });
  });

  // Dynamic background animation based on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
      bgAnimation.style.transform = `translateY(${rate}px)`;
    }
  });

  // Add viewport animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .plan');
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < window.innerHeight - elementVisible) {
        element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run on load

  // Menu toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }

  // Performance optimization: throttle scroll events
  let ticking = false;

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        // Add other scroll effects if needed
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestScrollUpdate);
});