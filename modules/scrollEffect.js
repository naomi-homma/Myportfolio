const scrollEffect = () => {
  const element = document.getElementsByClassName('js_fadeIn');
  if(!element) return;

  let showTiming = window.innerHeight > 768 ? 200 : 80;
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;

  for (let i=0; i < element.length; i++) {
    let elementClientRect = element[i].getBoundingClientRect();
    let elementY = scrollY + elementClientRect.top;
    if(scrollY + windowH - showTiming > elementY) {
      element[i].classList.add('is_show');
    }
  }
}
// const element = document.getElementsByClassName('js_fadeIn');
// console.log(element);
scrollEffect();
window.addEventListener('scroll', scrollEffect);
