angular.module('selectDemoOptGroups', ['ngMaterial'])
.controller('SelectOptGroupController', function($scope) {
  $scope.toppings = [
    { category: 'meat', name: 'Pepperoni' },
    { category: 'meat', name: 'Sausage' },
    { category: 'meat', name: 'Ground Beef' },
    { category: 'meat', name: 'Bacon' },
    { category: 'veg', name: 'Mushrooms' },
    { category: 'veg', name: 'Onion' },
    { category: 'veg', name: 'Green Pepper' },
    { category: 'veg', name: 'Green Olives' },
  ];
});
