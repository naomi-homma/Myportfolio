//ロード時ふわっと表示
window.addEventListener("DOMContentLoaded", () => {
  const windowScroll = document.documentElement.scrollTop;
  const htmlHight = window.innerHeight;
  document.querySelectorAll('.load_up').forEach((loadUpElement) => {
    //要素の現在の位置を取得
    let loadUpElementOffsetTop = loadUpElement.offsetTop;
    if(windowScroll > loadUpElementOffsetTop - htmlHight){
      loadUpElement.classList.add('done');
    }
  })
})