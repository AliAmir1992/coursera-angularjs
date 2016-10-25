(function(){
  "use strict";
  
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService){
      var toBuy = this;
      toBuy.List = ShoppingListCheckOffService.getToBuyList();
      
      toBuy.Bought = function(itemIndex){
        ShoppingListCheckOffService.bought(itemIndex);
      }
      
  }
  
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService){
     var alreadyBought = this;
     alreadyBought.List = ShoppingListCheckOffService.getAlreadyBoughtList();
  }
  
  
  function ShoppingListCheckOffService(){
      var service = this;
      var toBuyList = [
        { quantity: 5, name: 'apple' },
        { quantity: 10, name: 'banana' },
        { quantity: 20, name: 'grapes' },
        { quantity: 30, name: 'mango' }
      ];
      var alreadyBoughtList = [];
      
      service.getToBuyList = function () {
        return toBuyList;
      }
      
      
      service.bought = function (itemIndex){
        alreadyBoughtList.push(toBuyList[itemIndex]);
        toBuyList.splice(itemIndex, 1);
      }
      
      
      service.getAlreadyBoughtList = function () {
        return alreadyBoughtList;
      }
  }
})
();