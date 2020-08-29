//modalを開く関数："is_open"classをaddする
//modalが複数ある⇒data属性
const modalWrapOpen = function(e) {
  //イベントが付けられたノードに対してdata属性(modal-open)をセット
  const dataModalOpen = e.currentTarget.dataset.modalOpen;
  Array.from(document.querySelectorAll('.work_modal_wrapper')).forEach((e, i) => {
    if(e.getAttribute('data-modal') === dataModalOpen){
      e.classList.toggle('is_open');
    }
  })
}

Array.from(document.querySelectorAll('.work_modal_open')).forEach((modalOpenElement) => {
  modalOpenElement.addEventListener('click', modalWrapOpen);
})