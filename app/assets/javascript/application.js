// app/assets/javascripts/application.js

document.addEventListener('DOMContentLoaded', () => {
    // Simple JS for navbar toggle on mobile
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    document.querySelector('.navbar').appendChild(navToggle);
  
    navToggle.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  
    // Track CTA clicks (example)
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('click', () => {
        console.log('CTA clicked');
        // Add GA event tracking if set up
      });
    });
  });