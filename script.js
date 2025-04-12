

//navbar responsive script

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Language Selector
const langSelector = document.querySelector('.language-selector');
const flagDropdown = document.querySelector('.flag-dropdown');

langSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    flagDropdown.classList.toggle('show');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        flagDropdown.classList.remove('show');
    }
    if (!e.target.closest('.navbar')) {
        mobileMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// Mobile Dropdowns
document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            this.parentElement.classList.toggle('active');
        }
    });
});









//plans section change price.

const toggle = document.getElementById('billingToggle');
const promoText = document.getElementById('promoText');
const soloSavings = document.getElementById('soloSavings');
const teamSavings = document.getElementById('teamSavings');

toggle.addEventListener('change', () => {
  const prices = document.querySelectorAll('.plan-card .price, .line-through, .real-price');

  prices.forEach(el => {
    if (el.dataset.year) {
      el.textContent = toggle.checked ? el.dataset.year : el.dataset.month;
    }
  });

  promoText.style.display = toggle.checked ? 'block' : 'none';
  soloSavings.style.display = toggle.checked ? 'block' : 'none';
  teamSavings.style.display = toggle.checked ? 'block' : 'none';
});