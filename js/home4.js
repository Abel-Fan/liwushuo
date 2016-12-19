$(function(){
    var top0 = parseInt($(".me-box").css("height"));
    var lang = parseInt($(".me-con").css("height"))-$(window).height();

    var top1;

    if(lang>0){
    touch.on("body","dragstart",".me-con",function(e){
        num=0;
        top1 = parseInt($(".me-con").css("top"));
        touch.on("body","drag",".me-con",move);
        touch.on("body","dragend",".me-con",moveend);
    });
    var num=0;
    function move(e){
        //e.distanceY
        //e.direction
        //console.log(e.distanceY);
        var top = top1+e.distanceY;

        var num1 = top0/255;
        var num2 = Math.abs(parseInt($(".me-con").css("top"))-top0);
        var jisu = 255-num1*num2;
        var navheight = parseInt($(".me-con .menu").css("height"));
        //console.log(num2);
        if(num2>(top0-navheight)){
            $(".me-con .menu").css({
                position:"fixed",
                top:navheight,
                left:0
            })
        }else{
            $(".me-con .menu").css({
                position:"",
                top:null,
                left:null
            })
        }
        //if(num2)
        if(jisu<0){
            jisu=0;
        }else if(jisu>200){
            jisu=255;
        }

        $(".top").css({
            background:"rgba(255,255,255,"+(top0-top)/200+")"
        });
        $(".top a").css({
            color:"rgb("+jisu+","+jisu+","+jisu+")"
        });


        if(top<=top0 && Math.abs(top)<lang){
            num+= parseInt(e.distanceY/100);
            //console.log(255-num);
            $(".me-con").css({
                top:top
            });

        }

    }
    function moveend(e){

    }
    }
});