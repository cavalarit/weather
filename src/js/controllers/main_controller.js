angular.module('CGIApp.controllers.Main', [])

.controller('MainController', function($scope){
    $scope.logo='images/logo.png';
    $scope.server='images/icon_server_3.png';
  
    $scope.apps = [ 
                { 
                    icon: 'images/icon_server_3.png', 
                    title: 'MOVE', 
                    developer: 'MOVE, Inc.', 
                    price: 0.99 
                }, 
                { 
                    icon: 'images/icon_server_3.png', 
                    title: 'Shutterbugg', 
                    developer: 'Chico Dusty', 
                    price: 2.99 
                },
                {
                    icon: 'images/icon_server_3.png',
                    title: 'Gameboard',
                    developer: 'Armando P.',
                    price: 1.99
                },
                {
                    icon: 'images/icon_server_3.png',
                    title: 'Forecast',
                    developer: 'Forecast',
                    price: 1.99
                }
            ];
            
    $scope.photos = [
                        {
                            title: 'Servidores',
                            author: 'Servidores',
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
});