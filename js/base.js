$(function(){
    function resize(originSize,type){
        type = type || "x";
        if(type=="x"){
            var width = document.documentElement.clientWidth;
            var scale = width/originSize*100+"px";
            document.getElementsByTagName("html")[0].style.fontSize=scale;
        }else if(type=="y"){
            var height = document.documentElement.clientHeight;
            var scale = height/originSize+"px";
            document.getElementsByTagName("html")[0].style.fontSize=scale;
        }
    }
    resize(750,"x");
});