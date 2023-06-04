window.addEventListener('DOMContentLoaded', (event) => {
    const buttonsSubir = document.querySelectorAll('button:first-child');
    const buttonsBajar = document.querySelectorAll('button:last-child');
    
    buttonsBajar.forEach((button) => {
      button.addEventListener('click', () => {
        const li = button.parentNode;
        const ol = li.parentNode;
        const prevLi = li.previousElementSibling;
        if (prevLi !== null) {
          ol.insertBefore(li, prevLi);
        }
      });
    });
    
    buttonsSubir.forEach((button) => {
      button.addEventListener('click', () => {
        const li = button.parentNode;
        const ol = li.parentNode;
        const nextLi = li.nextElementSibling;
        if (nextLi !== null) {
          ol.insertBefore(nextLi, li);
        }
      });
    });
  });