
/* header 넣기 */
document.addEventListener('DOMContentLoaded', function() {
    const header = document.createElement('header');
    const img = document.createElement('img');
    const container = document.querySelector('.container');
    
    if (container) {
        if (container.classList.contains('type')) {
            img.src = './images/header-white.png'; // type 클래스가 있으면 이 경로 사용
        } else {
            img.src = './images/header.png';
        }
        
        img.alt = '';
        header.appendChild(img);
        
    // container의 첫 번째 자식 요소로 header 요소를 추가
        container.insertBefore(header, container.firstChild);
    } else {
        console.error('Container element with class "container" not found.');
    }
});


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
function drPopupClose(pop){
    $('body').css('overflow','auto');
    $(pop).closest('.popup').css('display','none');
    $('.dim').css('display','none');

}

// 애니메이션 show hide 
$(function(){
	var options = {threhold: 1}
	var io = new IntersectionObserver((entries,observer) => {
		entries.forEach(entry => {
		// 관찰 대상이 viewport 안에 들어온 경우  클래스를 추가
			if (entry.isIntersecting) {
				entry.target.classList.add('on');
			}
			// 그 외의 경우 ' 클래스 제거
			else {
				entry.target.classList.remove('on');
			}
		});
	},options);

	// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
	var boxElList = document.querySelectorAll('.interaction');
	boxElList.forEach((el) => {
		io.observe(el);
	});

})

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

