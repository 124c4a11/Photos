class Preloader {
  constructor(container) {
    this.$container = $(container);
    this.$img = this.$container.find('.preloder__img')
  }

  init() {
    this.$img.fadeOut();
    this.$container.delay(400).fadeOut('slow');
  }
}


export default new Preloader('.preloader');