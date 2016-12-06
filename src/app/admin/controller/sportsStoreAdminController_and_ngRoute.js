(function(){
    angular.module("sportsStoreAdmin",["ngRoute","ngResource"])
        .config(function($routeProvider){
            $routeProvider.when("/login",{
                templateUrl:"admin/view/adminLogin.html"
            });

            $routeProvider.when("/main",{
                templateUrl:"admin/view/adminMain.html"
            });

            $routeProvider.otherwise({
                redirectTo:"/login"
            });
        });
})();
