var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/navi/',
      url: '/pages/navi.html',
    },
    {
      path: '/wedding_ceremony/',
      url: '/pages/wedding_ceremony.html',
    },
    {
      path: '/wedding_reception/',
      url: '/pages/wedding_reception.html',
    },
    {
      path: '/date_location/',
      url: '/pages/date_location.html',
    },
    {
      path: '/entourage/',
      url: '/pages/entourage.html',
    },
    {
      path: '/food_menu/',
      url: '/pages/food_menu.html',
    },
    {
      path: '/dev_page/',
      url: '/pages/dev_page.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
