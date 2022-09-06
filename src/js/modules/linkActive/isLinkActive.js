import isTargetScroll from "../utils/isTargetScroll.js";

const isLinkActive = (links, classActive = '', previewElement = true, idPreviewElement = 0) => {
  const previewElementActive = previewElement 
  ? links[idPreviewElement]
  : null;

  if(previewElement) previewElementActive.classList.add(classActive);

  let nextElementActive = previewElementActive !== null ? previewElementActive : null;

  links.forEach(link => {
    let linkParent = link.getAttribute('href');

    linkParent = linkParent.substring(0, 1) === '#'
      ? linkParent.substring(1, linkParent.length)
      : null;

    if(linkParent === null) {
      return {
        error: true,
        message: 'Error href'
      };
    }

    isTargetScroll([document.getElementById(linkParent)], (parent) => {
      nextElementActive = nextElementActive === null
        ? link
        : nextElementActive;

      if(nextElementActive !== null 
        && nextElementActive !== undefined
        && nextElementActive.classList.contains(classActive)
        && nextElementActive !== link) {
        nextElementActive.classList.remove(classActive);
      }
                           
      if(!nextElementActive.classList.contains(classActive) && nextElementActive !== link) {
        link.classList.add(classActive);
        nextElementActive = link;
      }
    });
  });
}

export default isLinkActive;