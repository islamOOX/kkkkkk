// ===================================
// MY LIFE IS SOCCER - Script Principal
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeFormations();
  initializeTrainers();
  initializeSmoothScroll();
  initializeVideo();
});

// ===================================
// Navigation
// ===================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ===================================
// Formations
// ===================================

function initializeFormations() {
  const formationCards = document.querySelectorAll('.formation-card');
  
  formationCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('click', function() {
      const formationName = this.querySelector('h3').textContent;
      console.log('Formation sélectionnée:', formationName);
    });
  });
}

// ===================================
// Trainers
// ===================================

function initializeTrainers() {
  const trainerCards = document.querySelectorAll('.trainer-card');
  
  trainerCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// ===================================
// Smooth Scroll
// ===================================

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===================================
// Video
// ===================================

function initializeVideo() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    video.addEventListener('play', function() {
      console.log('Vidéo en lecture');
    });
    
    video.addEventListener('pause', function() {
      console.log('Vidéo en pause');
    });
  });
}

// ===================================
// Formulaires
// ===================================

function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      console.log('Données du formulaire:', data);
      
      // Vous pouvez envoyer les données à un serveur ici
      // fetch('/api/submit-form', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      
      alert('Merci ! Nous vous recontacterons bientôt.');
      form.reset();
    });
  }
}

// ===================================
// Utilitaires
// ===================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// ===================================
// Animations
// ===================================

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.card, .formation-card, .trainer-card').forEach(el => {
    observer.observe(el);
  });
}

// Lancer les observations au chargement
window.addEventListener('load', observeElements);

// ===================================
// Exports
// ===================================

window.football2enjoy = {
  scrollToSection,
  toggleMenu,
  handleFormSubmit
};
