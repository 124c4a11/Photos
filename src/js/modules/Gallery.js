const Freewall = require('exports?Freewall!../vendor/freewall');
const lazyload = require('exports?$.fn.lazyload!../vendor/jquery.lazyload');

export default class Gallery {
  constructor(options) {
    this.gallerySelector = options.gallerySelector;
    this.itemSelector = options.itemSelector;
    this.linkSelector = options.linkSelector;
    this.imgSelector = options.imgSelector;

    this.$gallery = $(this.gallerySelector);
    this.$item = $(this.itemSelector);
    this.$img = $(this.imgSelector);
  }

  init() {
    let
      _this = this,
      wall = new Freewall(_this.gallerySelector);

    this.$img.lazyload({
      effect: 'fadeIn',
      threshold: 1000
    });

    wall.reset({
      selector: _this.itemSelector,
      animate: true,
      cellW: 150,
      cellH: 'auto',
      gutterX: 5,
      gutterY: 5,
      onResize() {
        wall.fitWidth();
      }
    });
    wall.fitWidth();

    $('.filter__btn').on('click', function() {
      let
        $this = $(this),
        category = $this.data('filter');

      $('.filter__btn').removeClass('btn_active');
      $this.addClass('btn_active');

      wall.filter(category);
    });

    this.$img.on('load', () => wall.fitWidth());

    this.$item.hover(function() {
      _this.$item.css('opacity', '.8');
      $(this).css('opacity', '1');
    }, () => _this.$item.css('opacity', '1'));
  }
}