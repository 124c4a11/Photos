import sidebar from './modules/sidebar';
import gallery from './modules/gallery';
import bottomBar from './modules/bottomBar';


$(document).ready(function() {
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