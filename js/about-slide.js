document.addEventListener('DOMContentLoaded', function() {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    gap: -100,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    pagination: false,
    width: '100%',
    fixedWidth: 'calc(25% + 100px)',
    focus: 'center',
    trimSpace: true,
    breakpoints: {
      768: {
        perPage: 3,
        fixedWidth: 'calc(33.33333% + 50px)',
        gap: -30,
      },
      576: {
        perPage: 1,
        fixedWidth: '100%',
      },
    },
  });
  
  splide.mount();
});