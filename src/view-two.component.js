(function () {
  angular
    .module('app')
    .component('viewTwo', {
      template: '<h1>View Two</h1>{{two.datum.data.time}}',
      controllerAs: 'two',
      bindings: {
        datum: '<'
      }
    });
})();
