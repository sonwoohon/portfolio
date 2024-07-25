/* header 넣기 */
document.addEventListener('DOMContentLoaded', function() {
    // 새로운 header 요소를 생성
    var header = document.createElement('header');
    
    // header 요소에 이미지를 추가
    var img = document.createElement('img');
    img.src = './images/header.png'; // 이미지 경로 설정
    img.alt = '';
    header.appendChild(img);

    var container = document.querySelector('.container');
    
    // container의 첫 번째 자식 요소로 header 요소를 추가
    if (container) {
        container.insertBefore(header, container.firstChild);
    } else {
        console.error('Container element with class "container" not found.');
    }
});
;;;;;;
// 탭버튼
function jqTab() {
    $('.ui-tab a').click(function (e) {
      e.preventDefault();
      const $href = $(this).attr('href');
      $(this).parent().addClass('active').siblings().stop().removeClass('active');
      $(this)
        .parent()
        .siblings()
        .each(function (e) {
          const $btn = $(this).find('a');
          const $btnHref = $btn.attr('href');
          $($btnHref).removeClass('active');
        });
      $($href).stop().addClass('active');
    });
  }
jqTab();

//팝업 열기
function drPopupOpen(popName){
    $('body').css('overflow','hidden');
    $('.dim').css('display','block');
    $(popName).css('display','block')
    $(popName).stop().animate({ scrollTop: 0 }, 300);
}

//팝업 닫기
function drPopupClose(pop, element){
    $('body').css('overflow','auto');
    $(pop).closest('.popup').css('display','none');
    $('.dim').css('display','none');

}

// 애니메이션 show hide 
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var mainAnimates = document.querySelectorAll('.interaction');
        var windowHeight = window.innerHeight;
        mainAnimates.forEach(function(mainAnimate) {
            var contentOffset = mainAnimate.offsetTop +150;
            var scrollPosition = window.scrollY;    
            if (scrollPosition + windowHeight >= contentOffset) {
                mainAnimate.classList.add('on');
            } 
            else {
                mainAnimate.classList.remove('on');
            }
        });
        
    });
});

// 아코디언
function accordion() {
    $('.folding-btn').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).closest('.accordion').find('.folding-panel').stop().slideUp(300);
    } else {
        $(this).addClass('open');
        $(this).closest('.accordion').find('.folding-panel').stop().slideDown(300);
    }
    });
}
accordion();

// 리렌더링 
document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'index.html';
});