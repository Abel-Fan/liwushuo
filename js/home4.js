$(function(){
    var top0 = parseInt($(".me-box").css("height"));
    var lang = parseInt($(".me-con").css("height"))+top0-$(window).height();
    var top1;
    console.log(lang);
    console.log($(".me-con").css("height"));
    console.log($(window).height());

    touch.on("body","dragstart",".me-con",function(e){
        num=0;
        top1 = parseInt($(".me-con").css("top"));
        touch.on("body","drag",".me-con",move);
    });
    var num=0;
    function move(e){
        var top = top1+e.distanceY;

        var num1 = top0/255;
        var num2 = Math.abs(parseInt($(".me-con").css("top"))-top0);
        var jisu = 255-num1*num2;
        var navheight = parseInt($(".me-con .menu").css("height"));
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

        console.log(top);


        if(top<=top0 && Math.abs(top)<lang){
            num+= parseInt(e.distanceY/100);
            //console.log(255-num);
            $(".me-con").css({
                top:top
            });

        }
    }

    $(".menu a").click(function(){
        $(".menu a").removeClass("menu-check");
        $(this).addClass("menu-check");
        $(".menu-con0").css("display","none");
        if($(this).index()==0){
            $(".menu-con0").eq(0).css("display","flex");
        }else{
            $(".menu-con0").eq(1).css("display","block");
        }

    })

});