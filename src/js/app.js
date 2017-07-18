import Sidebar from './modules/Sidebar';
import Gallery from './modules/Gallery';
import BottomBar from './modules/BottomBar';


$(document).ready(function() {
  const sidebar = new Sidebar({
    container: '#sidebar',
    toggle: '.sidebar__toggle'
  });

  const gallery = new Gallery({
    gallerySelector: '#gallery',
    itemSelector: '.gallery__item',
    linkSelector: '.gallery__item-link',
    imgSelector: '.gallery__item-img'
  });

  const bottomBar = new BottomBar({
    container: '.bottom-bar',
    toggle: '.bottom-bar__toggle',
    toggleOpenClass: 'bottom-bar__toggle_down'
  });

  gallery.init();

  if (sidebar.$toggle.length) {
    sidebar.$toggle.on('click', () => sidebar.clickOnToggle());
  }

  if (bottomBar.$toggle.length) {
    bottomBar.$toggle.on('click', () => bottomBar.clickOnToggle());
  }

  if ($('.filter__btn').length) {
    $('.filter__btn').on('click', () => bottomBar.close());
  }
});