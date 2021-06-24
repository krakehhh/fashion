$(function name() {

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu-top').toggleClass('menu-top--active');
  });

  $(window).scroll(function () {
    if (this.scrollY > 0) {
      $('.header__top').addClass("header__fixed");
    } else {
      $('.header__top').removeClass("header__fixed");
    }
  }); 

  const modalCall = $('[data-modal]');
  const modalClose = $('[data-close]');
  modalCall.on('click', function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('modal--active');
    $('body').addClass('no-scroll');
  });

  modalClose.on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.removeClass('modal--active');
    $('body').removeClass('no-scroll');
  });

  // $('[data-modal]').on('click', function () {
  //   $('.tel').addClass('show')
  // });

  $('.interior__items').slick({
    asNavFor: '.interior__slider-inner',
    focusOnSelect: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.interior__slider-inner').slick({
    asNavFor: '.interior__items',
    // draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"><svg width="46" height="12" viewBox="0 0 46 12"><path fill="#696969" d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23743 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46446 6.5962 0.989589 6.3033 0.696696C6.01041 0.403802 5.53553 0.403802 5.24264 0.696696L0.469669 5.46967ZM46 5.25L1 5.25L1 6.75L46 6.75L46 5.25Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="46" height="12" viewBox="0 0 46 12"><path fill="#696969" d="M45.5303 6.53033C45.8232 6.23744 45.8232 5.76256 45.5303 5.46967L40.7574 0.696699C40.4645 0.403806 39.9896 0.403806 39.6967 0.696699C39.4038 0.989593 39.4038 1.46447 39.6967 1.75736L43.9393 6L39.6967 10.2426C39.4038 10.5355 39.4038 11.0104 39.6967 11.3033C39.9896 11.5962 40.4645 11.5962 40.7574 11.3033L45.5303 6.53033ZM0 6.75H45V5.25H0L0 6.75Z"/></svg></button>',
  });

  $('.menu__top-form').on('click', function () {
    $('.menu__top-form').toggleClass('menu__top-form--active');
    $('.menu__top-input').toggleClass('menu__top-input--active');
  });

  $('.card__item-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });

  $('[data-fancybox]').fancybox({
    protect: true
  });

  $('.about__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-prev"><svg width="46" height="12" viewBox="0 0 46 12"><path fill="#696969" d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23743 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46446 6.5962 0.989589 6.3033 0.696696C6.01041 0.403802 5.53553 0.403802 5.24264 0.696696L0.469669 5.46967ZM46 5.25L1 5.25L1 6.75L46 6.75L46 5.25Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="46" height="12" viewBox="0 0 46 12"><path fill="#696969" d="M45.5303 6.53033C45.8232 6.23744 45.8232 5.76256 45.5303 5.46967L40.7574 0.696699C40.4645 0.403806 39.9896 0.403806 39.6967 0.696699C39.4038 0.989593 39.4038 1.46447 39.6967 1.75736L43.9393 6L39.6967 10.2426C39.4038 10.5355 39.4038 11.0104 39.6967 11.3033C39.9896 11.5962 40.4645 11.5962 40.7574 11.3033L45.5303 6.53033ZM0 6.75H45V5.25H0L0 6.75Z"/></svg></button>',
    // autoplay: true,
    // autoplaySpeed: 2000,

  });


  $('.slider-top__items').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 49L3 26L17 3" stroke="#262121" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="20" height="52" viewBox="0 0 20 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 49L17 26L3 3" stroke="#262121" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  $('.card__btn').on('click', function () {
    $(this).parents('.card__item').addClass('card__item--active');
  });

  $('.card__cross').on('click', function () {
    $(this).parents('.card__item').removeClass('card__item--active');
  });

  $('.menu__top-item').on('click', function (e) {
    e.preventDefault();
    $('.menu__top-item').removeClass('menu__top-item--active');
    $(this).addClass('menu__top-item--active');

    $('.menu__content-item').removeClass('menu__content-item--active');
    $($(this).attr('href')).addClass('menu__content-item--active');
  });

  $('.drop-filter__title').on('click', function () {
    $('.drop-filter__title').toggleClass('drop-filter__title--active');
    $('.drop-filter__content-wrapper').toggleClass('drop-filter__content-wrapper--active');
  });

  $('.drop-filter__link').on('click', function () {
    $(this).toggleClass('drop-filter__link--active');
    $('.variants__label').toggleClass('variants__label--active');
  });

  var filter__1 = document.querySelector('[data-ref="filter-1"]');
  var filter__2 = document.querySelector('[data-ref="filter-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(
    filter__1, {
    animation: {
      "duration": 250,
      "nudge": false,
      "reverseOut": false,
      "effects": "fade translateZ(-200px) rotateY(0)",
    },
    controls: {
      scope: 'local'
    },
  }
  );

  var mixer2 = mixitup(
    filter__2, {
    animation: {
      "duration": 250,
      "nudge": false,
      "reverseOut": false,
      "effects": "fade translateZ(-200px) rotateY(0)",
    },
    controls: {
      scope: 'local'
    },
  }
  );

  lazyload();
  
})



