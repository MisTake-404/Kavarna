
const isTargetScroll = (elements, callback) => {
  const comparisonPosition = (windowOffset, elementOffset, elementHeight, element) => {
    if(elementOffset <= windowOffset && (elementOffset + elementHeight) >= windowOffset) {
      callback(element);
    }
  }

  window.addEventListener('scroll', (e) => elements.forEach(element => comparisonPosition(
      window.pageYOffset, 
      parseInt((element.getBoundingClientRect().top + window.pageYOffset)), 
      element.offsetHeight,
      element
    ))
  );
}

export default isTargetScroll;