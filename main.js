$(function(){
  load_effect();
  // $(window).scroll(function (){
  //     scroll_effect();
  // });
});

//ふわっとロード
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

{
  // modalを出す
  const modalOpen = document.querySelectorAll('.works_modal_open');
  const modal = document.querySelectorAll('.works_modal_wrapper');
  const modalCover = document.querySelectorAll('.works_modal_mask');
  const html = document.documentElement;
  const body = document.body;
  
  let modalCloseAction;
  let dataModalOpen;
  let targetModal;
  
  const TIMEOUT_SPEED = 500;
  
  for (let i = 0; i < modalOpen.length; i++) {     
      //モーダルを消す処理
      modalCloseAction = function(e) {
        targetModal = e.currentTarget.closest('.works_modal_wrapper');
        targetModal.classList.add('is_close');  
        setTimeout(function(e) {
          targetModal.classList.remove('is_open');
          targetModal.classList.remove('is_close');
        }, TIMEOUT_SPEED);
      };
      
      // グレー部分をクリックでmodalを消す
      const modalWrapClose = function() {
           modalCover[i].addEventListener('click',function(e){
             modalCloseAction(e);
        },false);
      };
  
      // modalを出す
      const modalWrapOpen = function(e) {
        dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
        for (let b = 0; b < modal.length; b++) {
        
          if (modal[b].getAttribute('data-modal') === dataModalOpen) {
            modal[b].classList.add('is_open');
            modalWrapClose();
            return false;
          }
        }
      };
      
      modalOpen[i].addEventListener('click', function(e) {
        modalWrapOpen(e);
      }, false);
  }
  
  // modalを消す
  const modalBtnClose = document.querySelectorAll('.works_modal_close');
  for (let n = 0; n < modalBtnClose.length; n++) {
      modalBtnClose[n].addEventListener('click', function(e) {
        modalCloseAction(e);
        return false;
      }, false);
  }
}

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