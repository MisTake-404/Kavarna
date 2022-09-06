import { Navigation, Pagination } from "swiper";

const slidersConfig = {
  example: {
    modules: [Pagination, Navigation], 
    slidesPerView: 2, 
    spaceBetween: 30, 
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }
};

export default slidersConfig;