//ロード関数

//ページ内の指定の場所にスクロール関数
$('#menu a[href*="#"]').click(function(){
    var elmHash = $(this).attr('href'); //要素のハッシュ値
    var navHeight = document.getElementById("header").offsetHeight; //ナビの高さ
    var pos = $(elmHash).offset().top - navHeight; //ナビ分の高さを計算
    $('body,html').animate({scrollTop:pos}, 800); //移動アニメーション
    return false;
});

function FadeUpAnime(){
    $('._section').each(function(){
        var bool = getPosBool(this);
        
        if(bool){
            $(this).addClass('section--fadeUpAnime');
        }else{
            $(this).removeClass('section--fadeUpAnime');
        }
    });

    $('.smoothTextTrigger').each(function(){
        var bool = getPosBool(this);

        if(bool){
            $(this).addClass('smoothTextPlay');
        }else{
            $(this).removeClass('smoothTextPlay');
        }
    });

    $('.information').each(function(){
        var bool = getPosBool(this);

        if(bool){
            $(this).addClass('information--fadeLeftAnime');
        }else{
            $(this).removeClass('information--fadeLeftAnime');
        }
    });

    $('.work').each(function(){
        var bool = getPosBool(this);

        if(bool){
            $(this).addClass('work--fadeUpAnime');
        }else{
            $(this).removeClass('work--fadeUpAnime');
        }
    });
}

function getPosBool(_this){
    var elemPos = $(_this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scroll >= elemPos - windowHeight){
        return true;
    }else{
        return false;
    }
}

function InfoAnime(){
    $('information').each(function(){
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('.fadeUpAnime');
        }else{
            $(this).removeClass('.fadeUpAnime');
        }
    });
}

$(window).scroll(function(){
    FadeUpAnime();
    InfoAnime();
});

$(window).on('load', function(){
    FadeUpAnime();
    InfoAnime();
});