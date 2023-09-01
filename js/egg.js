$(function () {
    // $('.header .gnb>li').on('click', function () {
    //     $('.header .gnb>li .lnb').toggleClass('on')
    // })

    $('.mobile_btn .btn').on('click', function () {
        $('.header .gnb').toggleClass('on');
    });

    $('.gnb ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.lnb').stop().slideUp();
        }
    });

    $('.e_slide').slick({
        arrows: false,
        // fade: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '336.5px',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },

            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
              }
            },
        ]
    });

    $('.slide_btn .egg_l').on('click', function () {
        $('.e_slide').slick('slickPrev')
    })

    $('.slide_btn .egg_r').on('click', function () {
        $('.e_slide').slick('slickNext')
    })

    $('.im_slide').slick({
        slidesToShow: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },

            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 4,
              }
            },
        ]
    })

    $('.r_slide').slick({
        arrows: false,
        fade: true,
        slidesToShow: 1,
        infinite: true,
    })

    
    $('.r_btn .b_left').on('click', function () {
        $('.r_slide').slick('slickPrev')
    })

    $('.r_btn .b_right').on('click', function () {
        $('.r_slide').slick('slickNext')
    })
})