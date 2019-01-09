//判断是平板还是手机（由于jquery mobile只是用在手机或者平板上，所以不用判断是否为pc端）
// /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?$("#images li img").css("width",window.screen.width+'px'):$("#images li img").css("width",'720px');
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
  $("#images li img").css("width",window.screen.width+'px');
  //$("#photo img").css("")
}
else{
  $("#images li img").css("width",'720px');
}
var len=$(".banner ul li").length;
var num=0;
$(".banner ul li").css("display","none");
$(".banner ul li").eq(num).css("display","block");
$(".banner ol li").css("background-color","transparent");
$(".banner ol li").eq(num).css("background-color","#fff");
timer=setInterval(slideX,3000);
  //向左滑动
  $("#banner ul li").on("swipeleft",function(){
    clearInterval(timer);
    if(num<=0){num=len-1;}
    else{num--;}
    $(".banner ul li").css("display","none");
    $(".banner ul li").eq(num).css("display","block");
    $(".banner ol li").css("background-color","transparent");
    $(".banner ol li").eq(num).css("background-color","#fff");
    timer=setInterval(slideX,3000);
  })
  //向右滑动
  $("#banner ul li").on("swiperight",function(){
    clearInterval(timer);
    if(num>=len-1){ num=0;}
    else{ num++ }
    $(".banner ul li").css("display","none");
    $(".banner ul li").eq(num).css("display","block");
    $(".banner ol li").css("background-color","transparent");
    $(".banner ol li").eq(num).css("background-color","#fff");
    timer=setInterval(slideX,3000);
  })
  function slideX(){
    $(".banner ul li").css("display","none");
    $(".banner ol li").css("background-color","transparent");
    if(num>=len-1){ num=0;}
    else{ num++ }
    $(".banner ul li").eq(num).css("display","block");
    $(".banner ol li").eq(num).css("background-color","#fff");
  }
