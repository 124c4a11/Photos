'use strict';

export default class Sidebar {
  constructor({container, toggle}) {
    this.$sidebar = $(container);
    this.$toggle = this.$sidebar.find(toggle);
    this.$userInfo = this.$sidebar.find('.sidebar__user');
    this.$menu = this.$sidebar.find('.sidebar__menu');
  }

  open() {
    this.$sidebar.addClass('sidebar_open');
    this.$toggle.addClass('hamburger_close');

    if (this.$userInfo.length) {
      this.$userInfo.removeClass('user_hidden');
    }

    if (this.$menu.length) {
      this.$menu.removeClass('main-menu_compact');
    }
  }

  close() {
    this.$sidebar.removeClass('sidebar_open');
    this.$toggle.removeClass('hamburger_close');

    if (this.$userInfo.length) {
      this.$userInfo.addClass('user_hidden');
    }

    if (this.$menu.length) {
      this.$menu.addClass('main-menu_compact');
    }
  }

  clickOnToggle() {
    if (this.$sidebar.hasClass('sidebar_open')) {
      this.close();
    } else {
      this.open();
    }
  }
}