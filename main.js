
//ロード時ふわっと表示
$(function(){
  load_effect();
});

function load_effect(){
  var tt = $(window).scrollTop();
  var hh = $(window).height();
  $('.load-up').each(function(){
      var yy = $(this).offset().top;
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });
}

//スクロール時ふわっと表示
ScrollReveal().reveal('.fadeIn', {
  delay: 500,
  duration: 1500, 
  origin: 'bottom', 
  distance: '150px',
  reset: false 
});

// スムーズスクロール&ハンバーガーメニュー処理
$(function() {
  //スムーズスクロール
  let runScroll = function() {
    $('a[href^="#"]').click(function() {
        let adjust = 80;
        let speed = 400;
        let href = $(this).attr("href");
        let $target = $(href == "#" || href == "" ? 'html' : href);
        let position = $target.offset().top - adjust;

        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
};

  // ハンバーガーメニューチェックボックス外す処理
  let unlockCheckBox = function() {
    let $trigger = $('.header_navi_item a');
    let $target = $('input[type="checkbox"]');

    $trigger.click(function() {
        $target.prop('checked', false);
    });
  };

// Document Ready
  runScroll();
  unlockCheckBox();
});