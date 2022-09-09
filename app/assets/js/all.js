const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
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