$( document ).ready(function(){
    $(".quiz .quiz__step .yes").on('click', function(){
        $(this).parents('.quiz__step').next('.quiz__step').addClass('show');
        $(this).siblings('a').css("display","none");
        $(this).addClass("zoom");
        $(this).siblings('p').addClass("zoom");
        $(this).parents('.quiz__step').animate({
            left: 430,
            top: 200,
            height: 200,
            width: 200,
        }, 1000, 'easeInOutSine');
    }); 
    
     $(".quiz .quiz__step:nth-child(2) .yes").on('click', function(){
        $(this).parents('.quiz__step').prev('.quiz__step').animate({
            left: 300,
            top: 225,
            height: 150,
            width: 150,
        }, 1000);
        $(".quiz .quiz__step:nth-child(1) p, a").addClass("zoom--xl");
    }); 

    $(".quiz .quiz__step .restart").on('click', function(){
        $(this).parents('.quiz__step').prev('.quiz__step').animate({
            left: '50%',
            top: 0,
            height: 600,
            width: 600,
        }, 1000, 'easeInOutSine');
        $(this).parents('.quiz__step').removeClass('show');
        $('.quiz__step .no').css('display','inline-block');
        $('.quiz__step p, a').removeClass('zoom');
    });
}); 