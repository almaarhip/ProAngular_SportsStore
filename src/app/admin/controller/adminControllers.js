angular.module("sportsStoreAdmin")
    .constant("ordersUrl","http://localhost:2403/orders")
    .constant("authUrl","http://localhost:2403/users/login")

.controller("authController",function($scope,$http,$location,authUrl){

    $scope.authenticate=function(user,pass) {

        $http.post(authUrl, {
                username: user,
                password: pass
            },
            {withCredentials: true})
            .success(function (data) {
                $location.path("/main");
            })
            .error(function (error) {
                $scope.authenticationError = error;
            });

    }
})
.controller("mainController",function($scope){
   $scope.screens=["Products","Orders"];
    $scope.current=$scope.screens[0];

    $scope.setScreen=function(index){
        $scope.current=$scope.screens[index];
    };

    $scope.getScreen=function(){
      return $scope.current=="Products" ? "admin/view/adminProducts.html" : "admin/view/adminOrders.html";
    };
})
.controller("ordersController",function($scope,$http,ordersUrl){
    $http.get(ordersUrl,{withCredentials:true})
        .success(function(data){
            $scope.orders=data;
        })
        .error(function(error){
            $scope.error=error;
        });

    $scope.selectedOrder;

    $scope.selectOrder=function(order){
        $scope.selectedOrder=order;
    };

    $scope.calcTotal=function(order){
      var total=0;
        for(var i=0;i<order.products.length;i++) {
            total += (order.products[i].count * order.products[i].price);
        }
        return total;
    };
});