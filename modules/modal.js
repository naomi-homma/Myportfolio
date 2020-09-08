const modalWrapOpen = function(e) {
  const dataModalOpen = e.currentTarget.dataset.modalOpen;
  document.querySelectorAll('.works_modal_wrapper').forEach((e) => {
    if(e.getAttribute('data-modal') === dataModalOpen){
      e.classList.toggle('is_open');
    }
    // if(e.dataset.modal === dataModalOpen){
    //   e.classList.toggle('is_open');
    // }
  })
}

document.querySelectorAll('.works_modal_open').forEach((modalOpenElement) => {
  modalOpenElement.addEventListener('click', modalWrapOpen);
})

// modalを消す
const modalCloseAction = function(e) {
  const targetModal = e.currentTarget.closest('.works_modal_wrapper');
  targetModal.classList.toggle('is_open')
};

document.querySelectorAll('.works_modal_close, .works_modal_mask').forEach((modalCloseElement) => {
  modalCloseElement.addEventListener('click', modalCloseAction)
})