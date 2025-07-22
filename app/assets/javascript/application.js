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
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

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

  // Add loading animations
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Add cursor trail effect variables
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
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

  // Enhanced hover effects for app buttons
  document.querySelectorAll('.app-store, .google-play').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  

  // Performance optimization: throttle scroll events
  let ticking = false;

  function updateScrollEffects() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
      indicator.style.width = scrolled + '%';
    }

    const scrolledAmount = window.pageYOffset;
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
      bgAnimation.style.transform = `translateY(${scrolledAmount * -0.5}px)`;
    }

    document.querySelectorAll('.floating-ball').forEach((ball, index) => {
      const speed = 0.5 + (index * 0.2);
      ball.style.transform = `translateY(${scrolledAmount * speed}px)`;
    });

    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestScrollUpdate);
});