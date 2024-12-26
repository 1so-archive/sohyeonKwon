
// 아코디언 효과
// $(document).ready(function() {
//     $('.content-lists button').click(function() {
//         const imgBox = $(this).siblings('.img-box');
//         imgBox.toggleClass('on');

//         // img-box의 on 클래스 여부에 따라 슬라이드 토글
//         if (imgBox.hasClass('on')) {
//             imgBox.stop().slideDown(300);
//         } else {
//             imgBox.stop().slideUp(300);
//         }
//     });
    

// });

// 브라우저의 자동 스크롤 복원 비활성화
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // 페이지 새로고침 또는 닫을 때 스크롤 초기화
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

// active 효과
document.addEventListener('DOMContentLoaded', function() {
    // 'active' 클래스를 적용할 요소들을 선택
    const elements = document.querySelectorAll('.txt-wrap, .sec-title, .year-lists .ani, .active, .line-top, .line-bottom, .text-box, .year');
    
    // 페이지가 처음 로드될 때 모든 요소에서 active 클래스를 제거
    elements.forEach(element => {
        element.classList.remove('active');
    });

    window.addEventListener('scroll', function() {
        elements.forEach(element => {
            // 요소의 위치를 확인
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;

            // 화면 상단에 요소가 다가올 때 active 클래스를 추가
            if (elementTop <= window.innerHeight * 0.75 && elementTop + elementHeight > 0) {
                // 'active' 클래스가 없을 경우에만 추가
                if (!element.classList.contains('active')) {
                    element.classList.add('active');
                }
            }
        });
    });
});

// ani2
document.addEventListener("scroll", () => {
    const imgBoxes = document.querySelectorAll(".img-box.ani2");
  
    imgBoxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
      if (isVisible) {
        box.classList.add("active");
      } else {
        box.classList.remove("active"); // 필요에 따라 제거
      }
    });
  });
  


// 네비게이션
document.addEventListener("DOMContentLoaded", function() {
    // 모든 섹션(section 요소)와 내비게이션 링크를 가져옵니다
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".gnb li a");

    // IntersectionObserver를 사용해 각 섹션의 가시성을 추적합니다
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const targetId = entry.target.id;  // 관찰되는 섹션의 ID
            const correspondingLink = document.querySelector(`.gnb li a[href="#${targetId}"]`);

            if (entry.isIntersecting) {
                // 섹션이 보이면 active 클래스를 추가
                correspondingLink.classList.add("active");
            } else {
                // 섹션이 보이지 않으면 active 클래스를 제거
                correspondingLink.classList.remove("active");
            }
        });
    }, {
        threshold: 0.2,  // 섹션이 12% 보일 때 바로 활성화
        rootMargin: "0px 0px -10% 0px"  // 섹션이 화면 하단에서 20%만큼 보일 때 활성화
    });

    // 각 섹션을 observer로 등록합니다
    sections.forEach(section => {
        observer.observe(section);
    });

    // 스크롤 이벤트를 감지하여 내비게이션 고정 상태를 관리합니다.
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY > headerHeight) {
            // 스크롤이 헤더 높이를 넘어서면, 내비게이션을 고정시킵니다
            header.classList.add("scrolled");
        } else {
            // 스크롤이 헤더 높이보다 적으면, 내비게이션을 원래 상태로 돌립니다
            header.classList.remove("scrolled");
        }
    });
});

// 모바일메뉴
$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.open-menu').fadeOut(0);
        $('.mobile-menu, .close-menu').fadeIn(0);
    });
    $('.close-menu').click(function(){
        $('.mobile-menu, .close-menu').fadeOut(0);
        $('.open-menu').fadeIn(0);
    });
});

//메인 텍스트
window.addEventListener("DOMContentLoaded", () => {
    const elements = [
      document.querySelector(".txt-wrap"), 
      document.querySelector(".gnb"),     
      document.querySelector(".logo"),
      document.querySelector(".mo-menu")      
    ];
  
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, 100 * index); 
    });
});
  
  
    

// 마우스
  
// (function Cursor() {
  
//   var possibleEmoji = ["🦷", "❔", "🛁", "🤍"]; /*여기서 문자,이모티콘 수정*/
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var cursor = {x: width/2, y: width/2};
//   var particles = [];
  
//   function init() {
//     bindEvents();
//     loop();
//   }
  
//   // Bind events that are needed
//   function bindEvents() {
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('touchmove', onTouchMove);
//     document.addEventListener('touchstart', onTouchMove);
    
//     window.addEventListener('resize', onWindowResize);
//   }
  
//   function onWindowResize(e) {
//     width = window.innerWidth;
//     height = window.innerHeight;
//   }
  
//   function onTouchMove(e) {
//     if( e.touches.length > 0 ) {
//       for( var i = 0; i < e.touches.length; i++ ) {
//         addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//       }
//     }
//   }
  
//   function onMouseMove(e) {    
//     cursor.x = e.clientX;
//     cursor.y = e.clientY;
    
//     addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//   }
  
//   function addParticle(x, y, character) {
//     var particle = new Particle();
//     particle.init(x, y, character);
//     particles.push(particle);
//   }
  
//   function updateParticles() {
    
//     // Updated
//     for( var i = 0; i < particles.length; i++ ) {
//       particles[i].update();
//     }
    
//     // Remove dead particles
//     for( var i = particles.length -1; i >= 0; i-- ) {
//       if( particles[i].lifeSpan < 0 ) {
//         particles[i].die();
//         particles.splice(i, 1);
//       }
//     }
    
//   }
  
//   function loop() {
//     requestAnimationFrame(loop);
//     updateParticles();
//   }
  
//   /**
//    * Particles
//    */
  
//   function Particle() {

//     this.lifeSpan = 120; //ms
//     this.initialStyles ={
//       "position": "absolute",
//       "display": "block",
//       "pointerEvents": "none",
//       "z-index": "10000000",
//       "fontSize": "25px",                  /*마우스 사이즈 조정*/
//       "will-change": "transform"
//     };

//     // Init, and set properties
//     this.init = function(x, y, character) {

//       this.velocity = {
//         x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
//         y: 1
//       };
      
//       this.position = {x: x - 18, y: y - 1000};


//       this.element = document.createElement('span');
//       this.element.innerHTML = character;
//       applyProperties(this.element, this.initialStyles);
//       this.update();
      
//       document.body.appendChild(this.element);
//     };
    
//     this.update = function() {
//       this.position.x += this.velocity.x;
//       this.position.y += this.velocity.y;
//       this.lifeSpan--;
      
//       this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
//     }
    
//     this.die = function() {
//       this.element.parentNode.removeChild(this.element);
//     }
    
//   }
  
//   /**
//    * Utils
//    */
  
//   // Applies css `properties` to an element.
//   function applyProperties( target, properties ) {
//     for( var key in properties ) {
//       target.style[ key ] = properties[ key ];
//     }
//   }
  
//   init();
// })();





