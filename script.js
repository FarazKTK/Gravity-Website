window.addEventListener('load', function () {
      setTimeout(function () {
        document.body.classList.add('loaded');
      }, 1000);
});



let started = false; // So animation runs only once

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

