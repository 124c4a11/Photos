import bottomBar from './bottomBar';

class Sidebar {
  constructor({container, toggle}) {
    this.$sidebar = $(container);
    this.$toggle = this.$sidebar.find(toggle);
    this.$userInfo = this.$sidebar.find('.sidebar__user');
    this.$menu = this.$sidebar.find('.sidebar__menu');

    this.$main = $('.main');
    this.$page = $('.page');

    this.state = 'close';
  }

  open() {
    this.$sidebar.addClass('sidebar_open');
    this.$toggle.addClass('hamburger_close');
    this.state = 'open';

    if (bottomBar.state === 'open') {
      bottomBar.close();
    }

    if (this.$userInfo.length) {
      this.$userInfo.removeClass('user_hidden');
    }

    if (this.$menu.length) {
      this.$menu.removeClass('main-menu_compact');
    }

    if (this.$main.length) {
      this.$main.addClass('main_move-left');
    }

    if (this.$page.length) {
      this.$page.addClass('page_overflow-hidden');
    }
  }

  close() {
    this.$sidebar.removeClass('sidebar_open');
    this.$toggle.removeClass('hamburger_close');
    this.state = 'close';

    if (this.$userInfo.length) {
      this.$userInfo.addClass('user_hidden');
    }

    if (this.$menu.length) {
      this.$menu.addClass('main-menu_compact');
    }

    if (this.$main.length) {
      this.$main.removeClass('main_move-left');
    }

    if (this.$page.length) {
      this.$page.removeClass('page_overflow-hidden');
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


export default new Sidebar({
  container: '.sidebar',
  toggle: '.sidebar__toggle'
});