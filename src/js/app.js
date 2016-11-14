var app = angular.module('CGIApp', [
  'ngRoute',
  'mobile-angular-ui',
  'CGIApp.controllers.Main'
])

app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false})
                .when('/examples', {templateUrl:'examples.html',  reloadOnSearch: false})
                .when('/photos/:id', {
			controller: 'PhotoController',
                        templateUrl: 'appInfo.html'});
});

app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'appInfo.html' 
  }; 
});

app.controller('PhotoController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.detail = $scope.photos[$routeParams.id];
}]);

app.controller('HomeController', ['$scope', function($scope) {

    $scope.photos = [
                        {
                            title: 'Servidores',
                            autho: 'Servidores',
                            url: 'images/icon_server_3.png',
                            pubdate: 1412208000000,
                            upvotes: 60,
                            views: 1195
                        },
                        {
                            title: 'SLA',
                            author: 'SLA',
                            url: 'images/sla.png',
                            pubdate: 1413590400000,
                            upvotes: 67,
                            views: 1266
                        },
                        {
                            title: 'Incidentes',
                            author: 'Incidentes',
                            url: 'images/incident.png',
                            pubdate: 1415145600000,
                            upvotes: 83,
                            views: 3048
                        },
                        {
                            title: 'Monitores',
                            author: 'Monitores',
                            url: 'images/monitoring.png',
                            pubdate: 1413590400000,
                            upvotes: 55,
                            views: 1193
                        },
                        {
                            title: 'Capacity',
                            author: 'Capacity',
                            url: 'images/icon_server_3.png',
                            pubdate: 1418342400000,
                            upvotes: 130,
                            views: 1283
                        }/*,
                        {
                            title: 'Lake',
                            author: 'Didier Baertshiger',
                            url: 'images/icon_server_3.png',
                            pubdate: 1416009600000,
                            upvotes: 2345,
                            views: 139
                        }*/
                    ];
}]);

  /*$('.list-group-item').on('click',function(e){
    alert("Entoru");
    var previous = $(this).closest(".list-group").children(".active");
    previous.removeClass('active'); // previous list-item
    $(e.target).addClass('active'); // activated list-item
  });*/    
    