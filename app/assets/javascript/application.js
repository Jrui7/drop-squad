// app/assets/javascripts/application.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Drop Squad Pickleball is ready!');
    
    // Exemple de JS simple pour un futur effet, comme un smooth scroll si besoin
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });