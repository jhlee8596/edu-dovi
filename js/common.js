$(document).ready(function(){

  // 사용자가 마우스로 헤더영역에 오버하면 .on, .h_on을 적용하고 마우스를 아웃하면 .on, .h_on을 제거한다.

  $('header').hover(function(){ //오버시 동작
    $(this).find('h1 a').addClass('on');
    $(this).find('.gnb a').addClass('on');
    //검정색로고
    // $(this).find('h1 img').attr('src','./images/logo-casper.black.png');
    $(this).addClass('h_on');
  },function(){ //아웃시 동작
    $('header h1 a').removeClass('on');
    $('.gnb a').removeClass('on');
     //흰색로고
    // $('h1 img').attr('src','./images/logo-casper-white.png');
    $(this).removeClass('h_on');
  });

  // 스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);//스크롤값을 체크한다.
    
    if(sPos>=200){ //영상콘텐츠가 모두 올라가면
      //만약에 사용자가 헤더에 마우스를 아웃하면 서식이 지워지지 않는다.
      $('header').find('h1 a').addClass('on');
      $('header').find('.gnb a').addClass('on');
      //검정색로고
    //   $('header').find('h1 img').attr('src','./images/logo-casper.black.png'); 
      $('header').addClass('h_on');

      $('header').mouseleave(function(){ //마우스 아웃시 동작
        $(this).find('h1 a').addClass('on');
        $(this).find('.gnb a').addClass('on');
        //검정색로고
        // $(this).find('h1 img').attr('src','./images/logo-casper.black.png');
        $(this).addClass('h_on');
      });
      $('.q_mnu').fadeIn();
    }else{
      $('header h1 > a').removeClass('on');
      $('.gnb a').removeClass('on');
       //흰색로고
    //   $('h1 img').attr('src','./images/logo-casper-white.png');
      $('header').removeClass('h_on');

      $('header').mouseleave(function(){ //마우스 아웃시 동작
        $(this).find('h1 a').removeClass('on');
        $(this).find('.gnb a').removeClass('on');
        //검정색로고
        // $(this).find('h1 img').attr('src','./images/logo-casper-white.png');
        $(this).removeClass('h_on');
      });
      $('.q_mnu').fadeOut();
    }
    if(sPos >= 2000){
      $('.benefits-list').addClass('fade-in');
    }
    if(sPos >= 3100){
      $('.curriculum-list-wrap').addClass('fade-in');
    }
  });
});