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
}); 