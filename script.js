document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',
      perView: 5,
      focusAt: 'center',
      autoplay: 3000
    }).mount();
  });
  