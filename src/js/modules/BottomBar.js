export default class BottomBar {
  constructor(options) {
    this.containerSelector = options.container || '';
    this.containerOpenClass = options.containerOpenSelector || `${this.containerSelector.slice(1)}_open`;
    this.toggleSelector = options.toggle || '';
    this.toggleOpenClass = options.toggleOpenClass || `${this.toggleSelector.slice(1)}_open`;

    this.$container = $(this.containerSelector);
    this.$toggle = $(this.toggleSelector);
    this.$page = $('.page');
  }

  open() {
    let _this = this;

    this.$container.addClass(_this.containerOpenClass);
    this.$toggle.addClass(_this.toggleOpenClass);

    if (_this.$page.length) {
      _this.$page.addClass('page_overflow-hidden');
    }
  }

  close() {
    let _this = this;

    this.$container.removeClass(_this.containerOpenClass);
    this.$toggle.removeClass(_this.toggleOpenClass);

    if (_this.$page.length) {
      _this.$page.removeClass('page_overflow-hidden');
    }
  }

  clickOnToggle() {
    if (this.$container.hasClass(this.containerOpenClass)) {
      this.close();
    } else {
      this.open();
    }
  }
}