import accordionsConfig from "./configs/accordionsConfig.js";
import slidersConfig from "./configs/slidersConfig.js";
import devModules from "./modules/development/index.js";
import { allModules } from "./modules/init.js";

window.onload = () => {
  const modules = allModules;
  
  const _DOM = {
    selects: document.querySelectorAll('.wrapper-select__select'),
    anchors: document.querySelectorAll('.testanchor'),
    modal: {
      modals: document.querySelectorAll('[data-modal]'),
      buttons: document.querySelectorAll('[data-open-modal]'),
    },
    fixed: {
      circle: document.querySelector('.circle'),
    },
    preloader: document.querySelector('.preloader'),
  };


  const tabs = () => {
    const tab = modules.ItcTabs;

    new tab('.tabs');
  }

  const accordions = () => {
    modules.accordion('.accordion', accordionsConfig.example);
  }

  const sliders = () => {
    modules.swiper('.swiper', slidersConfig.example);
  }

  const fixedElements = () => {
    modules.fixedElement(_DOM.fixed.circle, _DOM.fixed.circle.getBoundingClientRect().height, 'fixed');
  } 


  //modules.anchors(_DOM.anchors, -25);


  //modules.selects(_DOM.selects);
  //modules.anchors(_DOM.anchors, -25);
  //modules.isLinkActive(_DOM.anchors, 'active', true, 0);
  //modules.modal(_DOM.modal.modals, _DOM.modal.buttons);
  //modules.ajaxForms('[data-form]', '[data-submit]', '/email.php', true, '/thanks');
  //fixedElements();
  //sliders();
  //accordions();
  //tabs();
  //modules.preloaderOff(_DOM.preloader);

}

// if (document.documentElement.clientWidth < 768) {}  

devModules.isWebp();