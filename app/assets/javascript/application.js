document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Tracker les clics sur CTA
    document.querySelector('.cta-button').addEventListener('click', () => {
      console.log('CTA clicked - Track in GA');
      gtag('event', 'click', { 'event_category': 'engagement', 'event_label': 'Book CTA' });
    });
  });