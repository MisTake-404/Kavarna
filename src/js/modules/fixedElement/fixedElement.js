

const fixedElement = (element, offset = 0, classFixed = 'fixed', fixHeight = false, fixHeightElement, fixHeightClass = 'active') => {
  window.addEventListener('scroll', (e) => {
    const windowPosition = window.pageYOffset;

    if(!fixHeight) {
      windowPosition >= offset
      ? element.classList.add(classFixed)
      : element.classList.remove(classFixed);
    } else {
      if(windowPosition >= offset) {
        element.classList.add(classFixed);
        fixHeightElement.classList.add(fixHeightClass);
      } else {
        element.classList.remove(classFixed);
        fixHeightElement.classList.remove(fixHeightClass);
      }
    }
    
    
  }
);
}

export default fixedElement;