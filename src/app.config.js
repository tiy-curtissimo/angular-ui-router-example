(function () {
  angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      var one = {
        name: 'viewOne',
        url: '/viewOne',
        component: 'viewOne'
      };

      var two = {
        name: 'viewTwo',
        url: '/viewTwo',
        resolve: {
          datum: function ($http) {
            return $http.get('http://date.jsontest.com');
          }
        },
        views: {
          left: { component: 'left' },
          right: { component: 'right' },
          '': { component: 'viewTwo' }
        }
      };

      $stateProvider.state(one);
      $stateProvider.state(two);
      $urlRouterProvider.otherwise('/viewOne');
    });
})();
