$(document).ready(function(){
    $('.toggle').click(function(){
        var checked = $(this).attr("data-checked");
        if(checked ==='false'){
            $('.ball').css({'left':'35px', 'transition':'left 1s'});
            $('h1').css('color','white');
            $(this).css('background-color','white');
            $('#container').css({'background-color':'black', 'transition':'all 0.5s'});
            $(this).attr("data-checked",true);
        }else{
           $('.ball').css('left','0px');
            $('h1').css('color','black');
            $(this).css('backgound-color','white');
            $('#container').css({'background-color':'white','transition':'all 2s'});
           $(this).attr("data-checked",false);
        }
    })
    
})