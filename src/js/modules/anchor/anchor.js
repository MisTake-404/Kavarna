import scrollTo from "../utils/scrollTo.js";

const anchors = (anchors, offset = 0) => {
  const scrollOffset = offset;

  if(window.history.state?.anchor) {
    scrollTo(document.getElementById(window.history.state.anchor), scrollOffset);
  }

  if(!anchors) {
    return false;
  }

  anchors.forEach(anchor => {
    const anchorLink = anchor.getAttribute('href');
    const symbolLink = anchorLink.indexOf('#');

    const isSymbolLinkFromPage = anchorLink.indexOf('&');

    if(symbolLink === -1) {
      return {
        error: true,
        message: 'У ссылки в параметре href ошибка. Якорь должен иметь вид #example'
      };
    }

    let linkPage = '';

    if(isSymbolLinkFromPage !== -1) {
      linkPage = `${anchorLink.substring((isSymbolLinkFromPage + 1), symbolLink)}`;
      if(linkPage.substring(linkPage.length - 1, linkPage.length) === '/' && linkPage.length !== 1) {
        linkPage = linkPage.substring(0, linkPage.length - 1);
      }
    }

    const href = anchorLink.substring(symbolLink + 1);
    
    anchor.addEventListener('click', (event) => {
      event.preventDefault();

      if(isSymbolLinkFromPage !== -1) {
        window.history.pushState({anchor: href}, "links", linkPage);
        window.location.href = linkPage;
      } else {
        scrollTo(document.getElementById(href), scrollOffset);
      }
    });    
  });
}

export default anchors;