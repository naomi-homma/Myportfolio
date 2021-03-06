const scrollEffect = (e) => {
  const targetElements = document.getElementsByClassName('js_fadeIn');
  if(!targetElements) return;

  // for (let i=0; i < targetElement.length; i++) {
  //   const showTiming = targetElement[i].clientHeight * 0.6;
  //   const getElementDistance = targetElement[i].getBoundingClientRect().top + showTiming;
  //   //要素の高さの60%が画面に出現したらis_showが付与される
  //   if(window.innerHeight > getElementDistance) {
  //     targetElement[i].classList.add('is_show');
  //   }
  // }
  Array.from(targetElements).forEach((targetElement) => {
    const showTiming = targetElement.clientHeight * 0.6;
    const getElementDistance = targetElement.getBoundingClientRect().top + showTiming;
    if(window.innerHeight > getElementDistance) {
      targetElement.classList.add('is_show');
    }
  })
}
window.addEventListener('scroll', scrollEffect);
