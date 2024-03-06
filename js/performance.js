function fadeInformation(){
    $('.information').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('information_anime_key');
        }else{
            $(this).removeClass('information_anime_key');
        }
    });
}

$(window).scroll(function(){
    fadeInformation();
});