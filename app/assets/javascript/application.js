// app/assets/javascripts/application.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navbar toggle
    const toggle = document.createElement('div');
    toggle.className = 'toggle';
    toggle.innerHTML = '☰';
    document.querySelector('.navbar').appendChild(toggle);
  
    toggle.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  });