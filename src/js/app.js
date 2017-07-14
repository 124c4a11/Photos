import Sidebar from './modules/Sidebar';
import Gallery from './modules/Gallery';


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

  gallery.init();

  if (sidebar.$toggle.length) {
    sidebar.$toggle.on('click', () => sidebar.clickOnToggle());
  }
});