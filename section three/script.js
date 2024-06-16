document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',
      perView: 3, 
      focusAt: 'center',
      autoplay: 3000,
      breakpoints: {
        768: {
          perView: 1,
        }
      }
    }).mount();
  });
  