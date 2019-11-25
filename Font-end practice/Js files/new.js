$(document).ready(function(){
    $(":file:first").css("background-color","green");

    $("p").click(function(){
        $(this).hide();
    });
    
    $("input[type='text']").focus(function(){
        $(this).css("background-color","red");
    })
    $("input[type='text']").blur(function(){
        $(this).css("background-color","yellow");
    })

    $("input[type='password']").blur(function(){
        $(this).css("background-color","yellow");
    })

    $("h1").on({
        mouseenter:function(){
            $(this).css("background-color","red")
        },
        mouseleave:function(){
            $(this).css("background-color","green")
        },
        click:function(){
            $(this).css("background-color","yellow")
        }
    });
    

});