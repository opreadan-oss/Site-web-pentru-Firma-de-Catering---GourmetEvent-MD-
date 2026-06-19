/* ============================================================
   GourmetEvent MD — script.js
   ============================================================ */

   document.addEventListener('DOMContentLoaded', function () {

    /* --- Active nav link based on current page --- */
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  
    /* --- Contact form submission --- */
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Se trimite...';
  
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = 'Trimite Cererea';
          showToast('Mulțumim! Cererea ta a fost trimisă. Te contactăm în cel mai scurt timp.');
          form.reset();
        }, 1200);
      });
    }
  
    /* --- Toast notification --- */
    function showToast(message) {
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; z-index: 9999;
        background: #1a1a1a; color: #fff; padding: 16px 24px;
        border-radius: 8px; font-size: 14px; max-width: 340px;
        box-shadow: 0 8px 30px rgba(0,0,0,.25);
        border-left: 4px solid #C9A84C;
        animation: slideIn 0.3s ease;
      `;
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s';
        setTimeout(() => toast.remove(), 400);
      }, 4000);
    }
  
  });
  
  /* CSS for toast animation */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(40px); opacity: 0; }
      to   { transform: translateX(0);    opacity: 1; }
    }
  `;
  document.head.appendChild(style);