$( document ).ready(function(){
    var allCircles = '.c1-1, .c1-2, .c1-2-1, .c1-2-2, .c1-2-3, .c1-2-3-1';
    var allOptions = '.a1-1, .a1-2, .a1-2-1, .a1-2-2, .a1-2-3, .a1-2-3-1'; 
//Circle 1 - Option 1 Selected
    $('.a1-1').on('click', function(){   
        $('.c1-1').addClass('show');
        $('.a1-2').css("display","none");
        $('.c1').addClass('selected');
    });

    //Circle 1 - Option 2 Selected 
    $('.a1-2').on('click', function(){   
        $('.c1-2').addClass('show');
        $('.a1-1').css("display","none");
        $('.c1').addClass('selected');
    }); 

        //Circle 1 -> 2 - Option 1 Selected 
        $('.a1-2-1').on('click', function(){   
            $('.c1-2-1').addClass('show');
            $('.a1-2-2, .a1-2-3').css("display","none");
            $('.c1-2').addClass('selected');
            $('.c1').addClass('selected--sec');
        });

        //Circle 1 -> 2 - Option 2 Selected 
        $('.a1-2-2').on('click', function(){   
            $('.c1-2-2').addClass('show');
            $('.a1-2-1, .a1-2-3').css("display","none");
            $('.c1-2').addClass('selected');
            $('.c1').addClass('selected--sec');
        });

        //Circle 1 -> 2 - Option 3 Selected 
        $('.a1-2-3').on('click', function(){   
            $('.c1-2-3').addClass('show');
            $('.a1-2-1, .a1-2-2').css("display","none");
            $('.c1-2').addClass('selected');
            $('.c1').addClass('selected--sec');
        });

            //Circle 1 -> 2 -> 3 Next Selected 
            $('.a1-2-3-1').on('click', function(){   
                $('.c1-2-3-1').addClass('show');
                $('.c1-2-3').addClass('selected');
                $('.c1-2').addClass('selected--sec');
                $('.c1').addClass('selected--thi');
                $('.info').removeClass('hide');
            }); 

    //Restart to 1st Circle       
    $('.restart').on('click', function(){   
        $(allCircles).removeClass('show selected selected--sec');
        $('a').css('display','inline-block');
        $('.c1').removeClass('selected selected--sec selected--thi');
        $('.subtitle, .info').addClass('hide');
    });

    //Show Subtitle
    $(allOptions).on('click', function(){   
        $('.subtitle').removeClass('hide');
    });   

    //Show last info on filter box    
    $('.back').on('click', function(){ 
        $('.c1-2-1, .c1-2-2').removeClass('show');  
        $('.c1-2').removeClass('selected');
        $('.c1').removeClass('selected--sec');
        $('.a1-2-1, .a1-2-2, .a1-2-3').css('display','inline-block');
    });

    //Backwards cicle on previous click
    $('.quiz__step').click(function() {
    var selectedThiPos = "-80px"
    var selectedSecPos = "20px";
    var selectedPos = "200px";
    var checkPos = $(this).css('left');
    var showIndex ="1";
    var checkIndex = $(allCircles).css('z-index');
    
        if ( checkPos == selectedPos){
            $(this).removeClass('selected');
            $(this).find('span a').css("display", "inline-block");
            $(this).prev('.quiz__step span a').css("display", "inline-block");
            $(this).nextAll('.quiz__step').removeClass('show');
            $(this).prevAll('.quiz__step').removeClass('selected--sec');
            $(this).prevAll('.selected--thi').addClass('selected--sec');
            $(this).prevAll('.quiz__step').removeClass('selected--thi');
            $('.info').addClass('hide');
        } else if (checkPos == selectedSecPos ){
            $(this).removeClass('selected--sec selected');
            $(this).find('span a').css("display", "inline-block");
            $(this).nextAll('.quiz__step').removeClass('show');
            $(this).nextAll('.quiz__step').removeClass('selected')
            $('span a').css("display", "inline-block");
            $('.c1').removeClass('selected--thi selected--sec');
            $('.info').addClass('hide');
        } else if (checkPos == selectedThiPos ){
            $(allCircles).removeClass('show selected selected--sec');
            $('a').css('display','inline-block');
            $('.c1').removeClass('selected selected--sec selected--thi');
            $('.info').addClass('hide');
        }
    });

}); 