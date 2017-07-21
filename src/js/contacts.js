import sidebar from './modules/sidebar';
import preloader from './modules/preloader';


$(document).ready(function() {
  if (sidebar.$toggle.length) {
    sidebar.$toggle.on('click', () => sidebar.clickOnToggle());
  }
});


$(window).on('load', function() {
  if ($('.preloader').length) {
    preloader.init();
  }
});