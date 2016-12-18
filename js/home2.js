$(function(){
    $(".lists1 li a").click(function(){
        $(".lists1 li a").removeClass("check");
        $(this).addClass("check")
    })
    //footer
    $("footer a").click(function(){
        $("footer a").removeClass("footer-check");
        $(this).addClass("footer-check");
    })
    $(".top .icon").click(function(){
        $(".share-box").slideToggle(100);
    })
    $(".cancel").click(function(){
        $(".share-box").slideUp(100);
    })
});