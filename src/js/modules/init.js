import selects from "./select/select.js";
import anchors from "./anchor/anchor.js";
import isLinkActive from "./linkActive/isLinkActive.js";
import modal from "./modal/modal.js";
import fixedElement from "./fixedElement/fixedElement.js";
import Router from "./routeModule/Router.js";
import swiper from "./slider/swiper.js";
import accordion from "./Accordion/accordion.js";
import ItcTabs from "./tabs/tabs.js";
import preloaderOff from "./preloader/preloader.js";
import ajaxForms from "./ajax/ajax.js";

export const allModules = {
  selects,
  anchors,
  isLinkActive,
  modal,
  fixedElement,
  Router,
  swiper,
  accordion,
  ItcTabs,
  preloaderOff,
  ajaxForms
};

export const initModules = () => {
  return {
    init: true
  };
};