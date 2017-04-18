$( document ).ready(function(){
    $(".quiz .quiz__step .yes").on('click', function(){
        $(this).parents('.quiz__step').next('.quiz__step').addClass('show');
        $(this).siblings('a').css("display","none");
        $(this).parents('.quiz__step').addClass('selected');
    }); 
    
     $(".quiz .quiz__step:nth-child(2) .yes").on('click', function(){
        $(this).parents('.quiz__step').prev('.quiz__step').addClass('selected--sec');
    }); 

    $(".quiz .quiz__step .restart").on('click', function(){
        $(this).parents('.quiz__step').prev('.quiz__step').removeClass('selected','selected--sec');
        $(this).parents('.quiz__step').removeClass('show');
        $('.quiz__step .no').css('display','inline-block');

    });

    //When choosing NO
    $(".quiz .quiz__step .no").on('click', function(){
        $(this).parents('.quiz__step').addClass('selected');
        $(this).parents('.quiz__step').siblings('.quiz__step--not').addClass('show');
        $(this).siblings('a').css("display","none");
    }); 
     $(".quiz .quiz__step--not .zerob, .one, .minus-equal-two").on('click', function(){
        $('.selected').addClass('selected--sec');
        $(this).siblings('a').css("display","none");
        $(this).parents('.quiz__step').addClass('selected');
        $(this).parents('.quiz__step').next('.quiz__step').addClass('show');
    }); 

    $(".quiz .quiz__step--no .restart").on('click', function(){
        $('.quiz__step .one, .minus-equal-two   ').css('display','inline-block');
        $(this).parents('.quiz__step').removeClass('show');
         $(this).parents('.quiz__step').prev('.quiz__step').removeClass('show');
        $('.show').removeClass('selected selected--sec');
        $(this).parents('.quiz__step').removeClass('show');
        $('.quiz__step .yes').css('display','inline-block');
    });

}); 