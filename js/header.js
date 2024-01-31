$(function() {
    var pos = $("nav").offset().top;
    
    var height = $("header").outerHeight();

    $(window).scroll(function(){

        if($(this).scrollTop() >= pos){
            $("nav").addClass("fixed");
            $("body").css("margin-top", height);
        }else{
            $("nav").removeClass("fixed");
            $("body").css("margin-top", 0);
        }
    });
});