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