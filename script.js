document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.movie-card');
  
    cards.forEach(card => {
      const wrapper = card.querySelector('.poster-wrapper');
  
      // Efeito Tilt 3D combinado com o zoom
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
  
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
  
        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
  
      card.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
  
      // Transição de tela ao clicar
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = card.getAttribute('href');
  
        const flashOverlay = document.createElement('div');
        flashOverlay.style.position = 'fixed';
        flashOverlay.style.inset = '0';
        flashOverlay.style.backgroundColor = '#3a0000';
        flashOverlay.style.zIndex = '9999';
        flashOverlay.style.opacity = '0';
        flashOverlay.style.transition = 'opacity 0.4s ease, background-color 0.4s ease';
        document.body.appendChild(flashOverlay);
  
        requestAnimationFrame(() => {
          flashOverlay.style.opacity = '1';
          flashOverlay.style.backgroundColor = '#000000';
        });
  
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 450);
      });
    });
  });