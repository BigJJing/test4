//手机字体设为窗口宽度/6.4

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}
//平板宽度统一设为100px
else{
  document.documentElement.style.fontSize = '100px';
}
