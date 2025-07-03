
document.addEventListener('keydown', function(e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ['i', 'c', 'j'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.key.toLowerCase() === 'u')
    ) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filters button');
  const photoItems = document.querySelectorAll('.photo-item');

  if (filterButtons.length && photoItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.filters .active')?.classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        photoItems.forEach(item => {
          item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
        });
      });
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  if (lightbox && lightboxImg && closeBtn) {
    document.querySelectorAll('.photo-item img').forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });

    closeBtn.onclick = () => lightbox.style.display = 'none';

    window.onclick = (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    };
  }
});
