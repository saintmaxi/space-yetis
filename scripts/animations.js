window.onscroll = function () {
  //Don't judge ok? I know I can use a foreach loop in javascript/jquery
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 1000 - windowHeight;
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  var meteor1 = document.getElementsByClassName('fall')[0];
  var meteor2 = document.getElementsByClassName('fall')[1];
  var meteor3 = document.getElementsByClassName('fall')[2];
  var meteor4 = document.getElementsByClassName('fall')[3];
  var meteor5 = document.getElementsByClassName('fall')[4];
  var meteor6 = document.getElementsByClassName('fall')[5];
  var meteor7 = document.getElementsByClassName('fall')[5];
  var ufo = document.getElementsByClassName('ufo')[0];


  meteor1.style.top = 100+scrollPercent*window.innerWidth/30 + 'px';
  meteor1.style.right = 600+scrollPercent*window.innerWidth/30 + 'px';
  meteor2.style.top = 0+scrollPercent*window.innerWidth/30 + 'px';
  meteor2.style.right = 0+scrollPercent*window.innerWidth/30 + 'px';
  meteor3.style.top = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor3.style.right = 800+scrollPercent*window.innerWidth/30 + 'px';
  meteor4.style.top = -600+scrollPercent*window.innerWidth/30 + 'px';
  meteor4.style.right = 1000+scrollPercent*window.innerWidth/30 + 'px';
  meteor5.style.top = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor5.style.right = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor6.style.top = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor6.style.right = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor7.style.top = -300+scrollPercent*window.innerWidth/30 + 'px';
  meteor7.style.right = -1000+scrollPercent*window.innerWidth/30 + 'px';
  ufo.style.left = -100+scrollPercent*window.innerWidth/10 + 'px';
 };

 window.onload = async () => {
    let countDownDate = new Date("2021-12-23T07:00:00.000+00:00").getTime();
    let now = new Date().getTime();
    let diff = countDownDate - now;
    if (diff < 0) {
        $("#mint-link").attr("href","/publicMint.html");
    };
};