'use strict';

const Freewall = require('exports?Freewall!../vendor/freewall');

export default class Gallery {
  constructor(options) {
    this.gallerySelector = options.gallerySelector;
    this.itemSelector = options.itemSelector;
    this.linkSelector = options.linkSelector;
    this.imgSelector = options.imgSelector;
  }

  init() {
    let
      _this = this,
      wall = new Freewall(_this.gallerySelector);

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
  }
}