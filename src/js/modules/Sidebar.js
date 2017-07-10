'use strict';

export default class Sidebar {
  constructor({container, toggle}) {
    this.$sidebar = $(container);
    this.$toggle = this.$sidebar.find(toggle);
  }

  open() {
    this.$sidebar.addClass('sidebar_open');
    this.$toggle.addClass('hamburger_close');
  }

  close() {
    this.$sidebar.removeClass('sidebar_open');
    this.$toggle.removeClass('hamburger_close');
  }

  clickOnToggle() {
    if (this.$sidebar.hasClass('sidebar_open')) {
      this.close();
    } else {
      this.open();
    }
  }
}