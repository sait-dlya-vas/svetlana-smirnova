// Скрипт для удобства: гладкий скролл и закрытие мобильного меню
(function() {
  'use strict';

  // Отслеживание видимых разделов (для подсвечивания активного пункта меню)
  const sections = document.querySelectorAll('[id]');
  const navLinks = document.querySelectorAll('.nav a');

  // Простая функция для обновления активного пункта меню
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.style.color = '';
        });

        const activeLink = document.querySelector(`.nav a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.style.color = 'var(--brand-accent)';
        }
      }
    });
  }

  // Обновляем активный пункт при скролле
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Первоначальный выз

  // Управление фокусом и доступностью
  document.addEventListener('click', function(e) {
    // Убедиться, что фокус остаётся видимым при взаимодействии
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      e.target.focus();
    }
  });
})();
