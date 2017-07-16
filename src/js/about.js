import Sidebar from './modules/Sidebar';


$(document).ready(function() {
  const sidebar = new Sidebar({
    container: '#sidebar',
    toggle: '.sidebar__toggle'
  });

  if (sidebar.$toggle.length) {
    sidebar.$toggle.on('click', () => sidebar.clickOnToggle());
  }
});