// app/assets/javascripts/drop_squad.js

document.addEventListener('DOMContentLoaded', function() {
  
    // Smooth scrolling for navigation links
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
  
    // Navbar scroll effect
    let lastScrollY = window.scrollY;
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
      document.querySelector('.scroll-indicator').style.width = scrolled + '%';
    });
  
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);
  
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelector('.nav-links');
      const burger = document.createElement('div');
      burger.className = 'burger';
      burger.innerHTML = '☰';
      document.querySelector('.navbar').insertBefore(burger, navLinks);
    
      burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    
      const cards = document.querySelectorAll('.card');
    
      cards.forEach(card => {
        let animationFrame = null;
        let progress = 0;
    
        function animateBorder() {
          if (!card.matches(':hover')) {
            if (progress > 0) {
              progress -= 0.01; // Smooth exit
              if (progress <= 0) {
                progress = 0;
                cancelAnimationFrame(animationFrame);
                card.style.borderTop = '3px solid';
                card.style.borderImage = 'linear-gradient(135deg, #00ff94 0%, #00cc75 100%) 1';
                card.style.borderLeft = '0';
                card.style.borderRight = '0';
                card.style.borderBottom = '0';
                return;
              }
            } else {
              return;
            }
          } else if (progress < 1) {
            progress += 0.01; // Smooth entry over 3 seconds (100 frames approx)
          }
    
          const green = `linear-gradient(135deg, #00ff94 0%, #00cc75 100%)`;
          const orange = `linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)`;
    
          if (progress <= 0.2) {
            card.style.borderTop = `3px solid`;
            card.style.borderImage = green;
            card.style.borderLeft = '0';
            card.style.borderRight = '0';
            card.style.borderBottom = '0';
          } else if (progress <= 0.5) {
            const t = (progress - 0.2) / 0.3;
            card.style.borderTop = `3px solid`;
            card.style.borderImage = `linear-gradient(${t * 100}deg, ${green}, ${orange})`;
            card.style.borderLeft = `${3 * t}px solid`;
            card.style.borderRight = `${3 * t}px solid`;
            card.style.borderBottom = '0';
          } else if (progress <= 0.8) {
            const t = (progress - 0.5) / 0.3;
            card.style.borderTop = '0';
            card.style.borderImage = orange;
            card.style.borderLeft = `${3 - 2 * t}px solid`;
            card.style.borderRight = `${3 - 2 * t}px solid`;
            card.style.borderBottom = `${3 * t}px solid`;
          } else {
            card.style.borderTop = '0';
            card.style.borderImage = orange;
            card.style.borderLeft = '0';
            card.style.borderRight = '0';
            card.style.borderBottom = '3px solid';
          }
    
          animationFrame = requestAnimationFrame(animateBorder);
        }
    
        card.addEventListener('mouseenter', () => {
          if (!animationFrame) animationFrame = requestAnimationFrame(animateBorder);
        });
    
        card.addEventListener('mouseleave', () => {
          if (animationFrame) animateBorder(); // Start exit animation
        });
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
  
    // Magnetic effect for CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px)';
      });
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
  
    // Add ripple effect to buttons
    function createRipple(event) {
      const button = event.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }
  
    // Add ripple style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      .cta-button, .app-store, .google-play {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  
    // Apply ripple effect to buttons
    document.querySelectorAll('.cta-button, .app-store, .google-play').forEach(button => {
      button.addEventListener('click', createRipple);
    });
  
    // Performance optimization: throttle scroll events
    let ticking = false;
    
    function updateScrollEffects() {
      // Navbar effect
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Progress indicator
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      const indicator = document.querySelector('.scroll-indicator');
      if (indicator) {
        indicator.style.width = scrolled + '%';
      }
      
      // Parallax effects
      const scrolledAmount = window.pageYOffset;
      
      // Background parallax
      const bgAnimation = document.querySelector('.bg-animation');
      if (bgAnimation) {
        bgAnimation.style.transform = `translateY(${scrolledAmount * -0.5}px)`;
      }
      
      // Floating balls parallax
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
    
    // Replace multiple scroll listeners with one optimized listener
    window.addEventListener('scroll', requestScrollUpdate);
  
  });