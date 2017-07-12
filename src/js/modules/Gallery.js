'use strict';

const Freewall = require('exports?Freewall!../vendor/freewall');
const lazyload = require('exports?$.fn.lazyload!../vendor/jquery.lazyload');

export default class Gallery {
  constructor(options) {
    this.gallerySelector = options.gallerySelector;
    this.itemSelector = options.itemSelector;
    this.linkSelector = options.linkSelector;
    this.imgSelector = options.imgSelector;

    this.$img = $(this.imgSelector);
  }

  init() {
    let
      _this = this,
      wall = new Freewall(_this.gallerySelector);

    this.$img.lazyload({
      effect: 'fadeIn',
      treshold: 1000
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

    this.$img.on('load', () => wall.fitWidth());
  }
}