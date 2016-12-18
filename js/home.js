$(function(){
    var widths = 0;
    var Minlang=0;
    $(".window .lists1 li").each(function(index,obj){
        widths += obj.offsetWidth+16;
    });
    $(".window .lists1").css("width",widths);
    Minlang = -(parseInt($(".lists1").width())-parseInt($(".window").width()));


    var falg = true;
    $(".icon-box").click(function(){
        if(falg){
            $(".window .lists1").css("display","none");
            $(".window span").css("display","block");
            $(".icon-box i").addClass("icon-down-copy-copy");
            $(".lists2").css("display","block");
            falg = false;
        }else{
            $(".window .lists1").css({
                display:"block",
                marginLeft:lefts
            });
            $(".window span").css("display","none");
            $(".icon-box i").removeClass("icon-down-copy-copy");
            $(".lists2").css("display","none");

            falg = true;
        }
    })

    var lefts=0;
    var index;
    $(".lists1 li a").click(function(){
        var x=0;
        lefts = parseInt($(".lists1").css("margin-left"));
        $(".lists1 li a").removeClass("check");
        $(".lists2 li a").removeClass("lists2-check");
        $(this).addClass("check");
        index = $(this).parent().index();
        $(".lists2 li a").eq(index).addClass("lists2-check");
        x += $(this).position().left;
        lefts = lefts-x;
        if(lefts>=Minlang){
            $(".lists1").css("margin-left",lefts);
        }
    });

    //列表lists2
    $(".lists2 li a").click(function(){
        $(".lists2 li a").removeClass("lists2-check");
        $(this).addClass("lists2-check");
        index = $(this).parent().index();
        $(".lists1 li a").removeClass("check");
        $(".lists1 li a").eq(index).addClass("check");
        lefts = parseInt($(".lists1").css("margin-left"));
        $(".lists2").slideUp();

        $(".window .lists1").css("display","block");
        $(".window span").css("display","none");
        widths=0;
        for(var i=0;i<index;i++){
            widths += $(".window .lists1 li").eq(i).width()+16;
        }
        console.log(widths);
        $(".lists1").css("margin-left",-widths);
        falg = true;
    });

    var lang=0;
    var left=0;
    var lang=0;

    touch.on("body","dragstart",".lists1",function(e){
        left = parseInt($(".lists1").css("margin-left"));
        touch.on("body","drag",".lists1",function(e){
            lang = left+ e.x;
            if(lang>0){
                lang=0;
            }else if(lang<Minlang){
                //alert(1);
                lang=Minlang;
            }
            $(".lists1").css("margin-left",lang);
        })

    })

    //footer
    $("footer a").click(function(){
        $("footer a").removeClass("footer-check");
        $(this).addClass("footer-check");
    })

    $(".")

});