$(document).ready(() => {
  'use strict';

  var owl = $('.owl-carousel'),
    item,
    itemsBgArray = [], // to store items background-image
    itemBGImg;

  owl.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
    navText: false,
    onTranslated: function () {
      changeNavsThump();
    }
  });

  $('.active').addClass('anim');

  var owlItem = $('.owl-item'),
    owlLen = owlItem.length;
  /* --------------------------------
    * store items bg images into array
  --------------------------------- */
  $.each(owlItem, function (i, e) {
    itemBGImg = $(e).find('.owl-item-bg').attr('src');
    itemsBgArray.push(itemBGImg);
  });
  /* --------------------------------------------
    * nav control thump
    * nav control icon
  --------------------------------------------- */
  var owlNav = $('.owl-nav'),
    el;

  $.each(owlNav.children(), function (i, e) {
    el = $(e);
    // append navs thump/icon with control pattern(owl-prev/owl-next)
    el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-thump">');
    el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-icon">');
  });

  /*-------------------------------------------
    Change control thump on each translate end
  ------------------------------------------- */
  function changeNavsThump() {
    var activeItemIndex = parseInt($('.owl-item.active').index()),
      // if active item is first item then set last item bg-image in .owl-prev-thump
      // else set previous item bg-image
      prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,
      // if active item is last item then set first item bg-image in .owl-next-thump
      // else set next item bg-image
      nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;

    $('.owl-prev-thump').css({
      backgroundImage: 'url(' + itemsBgArray[prevItemIndex] + ')'
    });

    $('.owl-next-thump').css({
      backgroundImage: 'url(' + itemsBgArray[nextItemIndex] + ')'
    });
  }
  changeNavsThump();
});

let imgs = [
  {
    id:1,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/9UX9KSL4AB.jpg',
    h3: 'Welcome',
    h2:'Mea Vocibus Eloquentiam',
    p:'erant aperiri sapientem senserit quo et. Sea aliquid interpretaris te, in his erant aperiri sapientem',
  },
  {
    id:2,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/DI64TAJTIS.jpg',
    h3: 'Welcome',
    h2:'Aperiri Sapientem',
    p:'Nam ante est, euismod id consequat eget, congue et lacus, Sed consequat laoreet purus.',
  },
  {
    id:3,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/QMA508CSJ4.jpg',
    h3: 'Aliquid Interpretari',
    h2:'Erant Aperiri',
    p:'Nam ante est, euismod id consequat eget, congue et lacus. Sed consequat laoreet purus, efficitur semper turpis pretium vitae.',
  },
  {
    id:4,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/DI64TAJTIS.jpg',
    h3: 'Sed finibus malesuada',
    h2:'Lorem ipsum dolor sit amet',
    p:'Sed finibus malesuada sem sed placerat. Sed id neque mattis dui hendrerit mattis. Etiam ultrices varius risus.',
  },
  {
    id:5,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/QJ82DCZS1A.jpg',
    h3: 'euismod mauris pretium',
    h2:'consectetur adipiscing elit',
    p:'Nam in nulla varius, sagittis ipsum a, hendrerit nisi. Nulla aliquet ligula id sem eleifend, nec tempus nulla lacinia.',
  },
  {
    id:6,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/IWWC5CHVYK.jpg',
    h3: 'tempus nulla lacinia',
    h2:'consequat felis nibh',
    p:'In blandit lorem ut ante cursus pharetra. Nulla ultrices, metus vehicula tristique sagittis, lectus dui fermentum quam.',
  },
  {
    id:7,
    ig:'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/5607D011AC.jpg',
    h3: 'Nam consequat felis',
    h2:'aliquet mi vestibulum',
    p:'Maecenas euismod mauris pretium nibh vestibulum pellentesque. Sed porta malesuada viverra, Pellentesque egestas faucibus turpis.',
  },
  
  
  
  
  
  
]


let slid = ' '

imgs.forEach((i) => {
  slid += `
    <div class='slide'>
    <img class='owl-item-bg' src=${i.ig}>
    <div class='slide-content'>
      <div class='overlay'></div>
      <h3>${i.h3}</h3>
      <h2>${i.h2}</h2>
      <p>${i.p}</p>
    </div>
  </div>
    `
})

document.getElementById("owlCarousel").innerHTML = slid