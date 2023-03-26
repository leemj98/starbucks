
//배지&스크롤 버튼 관련. 일정 스크롤을 넘어가면 배지 사라지고 버튼 나타나도록
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션 );
    gsap.to(badgeEl, .6, {
      //배지 숨기기
      opacity: 0, //투명 
      display: 'none'
    });
    // to top 버튼 보이기
    gsap.to(toTopEl, .2, { 
      
      x: 0//원래위치
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1, //복귀 
      display: 'block'
    });
    // to top 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100//x축 이동
    });
  }
}, 300));

toTopEl.addEventListener('click',function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//visual 요소들 순차적으로 나타나도록
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// 공지사항 SWIPER
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //방향: 수직
  autoplay: true, //자동재생 여부
  loop: true //반복재생 여부
});

// 프로모션 이미지 SWIPER
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 수평 방향 (기본값이라 생략가능)
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //ms단위, 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어(클릭) 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next' 
  }
});
// Awards SWIPER
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next' 
  }
});

//toggle promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion 
  if (isHidePromotion) {
    // true면 숨김처리
    promotionEl.classList.add('hide')
  } else {
    //false면 보임처리
    promotionEl.classList.remove('hide')
  }
})


// floating animation
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5,2.5), {
    y: size, //y축 이동
    repeat: -1, //-1: 무한반복
    yoyo: true, //yoyo: 한번 재생된 에니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//scroll magic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      trigerHook: .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});


