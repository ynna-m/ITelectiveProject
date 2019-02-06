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
      url: 'navi.html',
    },
    {
      path: '/wedding_ceremony/',
      url: 'wedding_ceremony.html',
    },
    {
      path: '/wedding_reception/',
      url: 'wedding_reception.html',
    },
    {
      path: '/date_location/',
      url: 'date_location.html',
    },
    {
      path: '/entourage/',
      url: 'entourage.html',
    },
    {
      path: '/food_menu/',
      url: 'food_menu.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
