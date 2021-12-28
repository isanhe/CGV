$(document).ready(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('.sub').stop().slideDown();
    },
    function(){
        $(this).find('.sub').stop().slideUp();
    });
    // mySwiper1슬라이드
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 0,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 탭메뉴(s3)
    // 모든내용숨김
    $('.tab_con > div').hide();
    // 첫번째만 보이게
    $('.tab_con > div:first').show();
    // 탭메뉴 클릭이벤트
    $('.tab_title ul li').click(function(e){
        // a의 # 속성 막아주는거
        e.preventDefault();
        // 클릭한 메뉴의 인덱스번호 num에 저장
         var num=$(this).index();

        // active 제거
        $('.tab_title ul li a').removeClass('active');
        // 클릭한 메뉴에 active 설정
        $(this).find('a').addClass('active');
        // 모든내용 숨김
        $('.tab_con > div').hide();
        // 클릭한 제목(li)과 동일한 인덱스 번호의 내용만 보이게 함
        $('.tab_con > div').eq(num).show(); //eq : 같으면
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          }
    });

    var swiper = new Swiper(".mySwiper3", {
        effect:'fade',
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          }
    });
    // family_site
    // 패밀리사이트 제목을 클릭하면 family리스트 올라옴
    $('.family_title a').click(function(e){
        // a href 속성 막음
        e.preventDefault();
        $('.family_list').animate({'top':0});
        //  삼각형 바뀜
        $('.family_title a span').css('background-position', 'bottom center');
    });
    // 패밀리 영역에서 마우스 아웃하면 리스트 내려감
    $('.family').mouseleave(function(){
        $('.family_list').animate({'top':200});
    });
    $('.family_title a span').css('background-position', 'top center');
    // top버튼
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
    });

    // 윈도우에 스크롤 이벤트 설정
    $(window).scroll(function(){
        // scrollTop값을 winTop변수에 저장
        var winTop=$(this).scrollTop();
        console.log(winTop);
        // .offset().top : scrollTop()으로부터 떨어져있는 거리
        // s2영역의 위쪽 위치값을 scroll1변수에 저장
        var scroll1=$('section.s2').offset().top-600;
        console.log(scroll1);
        // s3영역의 위쪽 위치값을 scroll1변수에 저장
        var scroll2=$('section.s3').offset().top-600;
        // s4영역의 위쪽 위치값을 scroll1변수에 저장
        var scroll3=$('section.s4').offset().top-600;
        // s5영역의 위쪽 위치값을 scroll1변수에 저장
        var scroll4=$('section.s5').offset().top-600;

        // 만약 s2영역이 보이면
        // && : "그리고"라는 뜻의 논리연산자. 조건이 2개 이상일 때
        if(scroll1 < winTop && winTop < scroll2){
            $('section.s2 h1').addClass('active');
            $('section.s2 p').addClass('active');
            $('section.s2 .swiper').addClass('active');
        }

        if(scroll2 < winTop && winTop < scroll3){
            $('section.s3 h1').addClass('active');
            $('section.s3 p').addClass('active');
            $('section.s3 .tab').addClass('active');
            $('section.s3 .view_btn').addClass('active');
        }

        if(scroll3 < winTop && winTop < scroll4){
            $('section.s4 h1').addClass('active');
            $('section.s4 p').addClass('active');
            $('section.s4 .tab').addClass('active');
            $('section.s4 .gallery').addClass('active');
            // $('section.s4 .swiper-slide').addClass('active');
            $('section.s4 .swiper-button-next2').addClass('active');
            $('section.s4 .swiper-button-prev2').addClass('active');
            $('section.s4 .s4_right').addClass('active');
        }

        if(scroll4 < winTop){
            $('section.s5 h1').addClass('active');
            $('section.s5 p').addClass('active');
            $('section.s5 .site').addClass('active');
        }
    });
});