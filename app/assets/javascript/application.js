/* app/assets/javascripts/application.js */

// Effets sur cartes et images (zoom on hover, smooth scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Hover zoom on cards/plans/images
    document.querySelectorAll('.card, .plan, .hero-overlay').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.3s ease';
      });
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
      });
    });
  
    // Smooth scroll for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });