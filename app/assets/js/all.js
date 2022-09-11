AOS.init();


const swiper = new Swiper('.artist-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 3
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

});


function showSearchBar(){
  document.querySelector('.search-bar').classList.add('d-flex')
}
function hideSearchBar(){
  document.querySelector('.search-bar').classList.remove('d-flex')
}

// 瀑布流
$('.artworks').imagesLoaded().progress( function() {
  $('.artworks').masonry(); // 渲染整體畫面
});

