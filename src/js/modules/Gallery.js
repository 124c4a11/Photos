import sidebar from './sidebar';
import bottomBar from './bottomBar';

const Freewall = require('exports?Freewall!../vendor/freewall');
const lazyload = require('exports?$.fn.lazyload!../vendor/jquery.lazyload');
const magnificPopup = require('exports?$.fn.magnificPopup!../../../node_modules/magnific-popup/dist/jquery.magnific-popup.js');

class Gallery {
  constructor(options) {
    this.gallerySelector = options.gallerySelector;
    this.itemSelector = options.itemSelector;
    this.linkSelector = options.linkSelector;
    this.imgSelector = options.imgSelector;

    this.$gallery = $(this.gallerySelector);
    this.$item = this.$gallery.find(this.itemSelector);
    this.$img = this.$gallery.find(this.imgSelector);
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

    $(_this.gallerySelector).magnificPopup({
      delegate: `${_this.itemSelector}:not([style~="width: 0px;"]) ${_this.linkSelector}`,
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
      callbacks: {
        open: function () {
          if (sidebar.state === 'open') sidebar.close();
          if (bottomBar.state === 'open') bottomBar.close();
        }
      }
    });
  }
}


export default new Gallery({
  gallerySelector: '.gallery',
  itemSelector: '.gallery__item',
  linkSelector: '.gallery__item-link',
  imgSelector: '.gallery__item-img'
});