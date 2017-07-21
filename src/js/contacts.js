import sidebar from './modules/sidebar';


$(document).ready(function() {
  if (sidebar.$toggle.length) {
    sidebar.$toggle.on('click', () => sidebar.clickOnToggle());
  }
});