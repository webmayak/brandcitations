$(function () {
  $('.reviews__carousel').owlCarousel({
    items: 1,
    nav: true,
    navText: ['<svg width="54.414" height="18.385" fill="#212121"><path d="M1.415 10.606L.001 9.192 9.193-.001l1.414 1.415z"/><path d="M1.415 7.778l1.414 1.414-1.414 1.414L.001 9.192z"/><path d="M54.415 8.192v2h-53v-2z"/><path d="M10.607 16.97l-1.414 1.414L0 9.192l1.415-1.414z"/></svg>', '<svg width="54.414" height="18.385" fill="#212121"><path d="M52.999 7.778l1.414 1.414-9.192 9.193-1.414-1.415z"/><path d="M52.999 10.606l-1.414-1.414 1.414-1.414 1.414 1.414z"/><path d="M-.001 10.192v-2h53v2z"/><path d="M43.807 1.414L45.221 0l9.193 9.192-1.415 1.414z"/></svg>'],
    responsive: {
      0: {
        autoHeight: true
      },
      992: {
        autoHeight: false
      }
    }
  });
});
