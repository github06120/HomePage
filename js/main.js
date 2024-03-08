//ロード関数
$(window).on('load', function(){
    
});

//ページ内の指定の場所にスクロール関数
$('#menu a[href*="#"]').click(function(){
    var elmHash = $(this).attr('href'); //要素のハッシュ値
    var navHeight = document.getElementById("header").offsetHeight; //ナビの高さ
    var pos = $(elmHash).offset().top - navHeight; //ナビ分の高さを計算
    $('body,html').animate({scrollTop:pos}, 800); //移動アニメーション
    return false;
});



function FadeAnime(){
    $('._section').each(function(){
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('_section--fadeUpAnime');
        }else{
            $(this).removeClass('_section--fadeUpAnime');
        }
    });
}

$(window).scroll(function(){
    FadeAnime();
});

$(window).on('load', function(){
    FadeAnime();
});