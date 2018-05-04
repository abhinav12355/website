$( document ).ready(function() {
    
//    function AnimateDownArrow(){
//        var arrow1 = $(".arrow1");
//        var arrow2 = $(".arrow2");
//        
//        setInterval(function(){             
//            arrow1.attr('fill','white');
//            arrow2.attr('fill','black');
//        }, 200);
//        setInterval(function(){ 
//                arrow1.attr('fill','black');
//                arrow2.attr('fill','white');
//        }, 600);
        
//    }
    
//    AnimateDownArrow();
//    
//    var position = $(window).scrollTop(); 
//
//    $(window).scroll(function() {
//        var scroll = $(window).scrollTop();
//        $(".logo").css('transform','rotate('+scroll*2+'deg)');
//        
////        if(scroll > position && scroll>5) {
////            window.scrollBy(0, 50);
////        }
////        position = scroll;
//    });
    
//    $('.radioSelect').each(function(i, obj) {
//        obj.click(function(){
//           console.log(i); 
//        });
//    });
    
    var radioButtons = document.getElementsByClassName('radioSelect');
    
    for (var j = 0; j < radioButtons.length; j++) {
        (function(radio) {
            radioButtons[j].style.backgroundColor = "white";
            radio.addEventListener('click', function(e) {
                e.target.parentNode.parentNode.style.backgroundColor = "skyblue";
                setTimeout(function(){
                    e.target.parentNode.parentNode.style.backgroundColor = "white";
                },2000);
            });
        })(radioButtons[j]);
    }
    

    
});