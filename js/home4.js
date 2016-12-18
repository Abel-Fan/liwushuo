$(function(){
    var top0 = parseInt($(".me-box").css("height"));
    var lang = parseInt($(".me-con").css("height"))-$(window).height();

    var top1;
    touch.on("body","dragstart",".me-con",function(e){
        num=0;
        top1 = parseInt($(".me-con").css("top"));
        touch.on("body","drag",".me-con",move);
        touch.on("body","dragend","me-con",moveend);
    });
    var num=0;
    function move(e){
        //e.distanceY
        //e.direction
        //console.log(e.distanceY);

        var top = top1+e.distanceY;

        var jisu =(top0/255)*(Math.abs(parseInt($(".me-con").css("top"))));
        if(jisu<0){
            jisu=0;
        }else if(jisu>255){
            jisu=255;
        }

        if(top<=top0 && Math.abs(top)<lang){
            num+= parseInt(e.distanceY/100);
            //console.log(255-num);
            $(".me-con").css({
                top:top
            });
            $(".top").css({
                background:"rgba(255,255,255,"+(top0-top)/200+")"
            })
            $(".top a").css({
                color:"rgb("+jisu+","+jisu+","+jisu+")"
            })
        }

    }
    function moveend(e){

    }
});