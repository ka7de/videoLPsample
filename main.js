// スムーススクロール
$(function () {
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var type = 'swing';
        var href =$(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({'scrollTop':position},speed,type);
        return false;
    });
});

// フェードイン
$(function(){
    $('.fadeOut').on('inview',function(){
        $(this).addClass('fadeIn');
    });
});

// 拡大して表示
$(function (){
    $('.catch-flex-odd').on('inview',function(){
        $(this).addClass('show1');
    });
    $('.catch-flex-even').on('inview',function(){
        $(this).addClass('show1');
    });
    $('.feature-contents-study-item').on('inview',function(){
        $(this).addClass('show1');
    })
    $('.support-contents-item').on('inview',function(){
        $(this).addClass('show1');
    });
    $('.price-back').on('inview',function(){
        $(this).addClass('show1');
    });
});

// 横からスライド
$(function (){
    $('.curriculum-desc-odd').on('inview',function(){
        $(this).addClass('show2');
    });
    $('.curriculum-desc-even').on('inview',function(){
        $(this).addClass('show2');
    });
});

// アコーディオンメニュー
$(function (){
    $('.accordion-title').on('click',function(){
        $('.accordion-desc').slideUp(500);

        var findElm = $(this).next('.accordion-desc');
        if($(this).hasClass('close')){
            $(this).removeClass('close');
        } else {
            $('.close').removeClass('close');
            $(this).addClass('close');
            $(findElm).slideDown(500);
        }
    });
});

// ハンバーガーメニュー
$(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#slide-menu').toggleClass('active');
    });

    $('.hamburger-nav-item a').click(function(){
        $('#hamburger').removeClass('active');
        $('#slide-menu').removeClass('active');
    });

    $('#hamburger-btn').click(function(){
        $('#hamburger').removeClass('active');
        $('.slide-menu').removeClass('active');
    });
});
