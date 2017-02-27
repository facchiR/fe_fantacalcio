app.controller('CalciatoriController', [ '$routeParams', '$location', '$scope', 'CalciatoriService',
    function($routeParams, $location, $scope, CalciatoriService) {
    var vm = $scope;
    
    vm.id = null;
    vm.item = {};
    vm.items = [];
    
    vm.loadItem = function(response){
        vm.item = response.data && response.data.item;
        vm.message = response.data && response.data.message || "";
    };
    
    vm.resetItem = function(){
        return {
            id:0,
            nome:'',
            ruolo:'',
            squadra_id:'',
            allenatore:'',
            denominazione:'',
            datafondazione: null,
            
        };
    };
    
    vm.loadItems = function(response){
        var list = response.data && response.data.items || [];
        vm.items.length = 0;
        angular.forEach(list, function(v,k){
            vm.items.push(v);
        });
        vm.message = response.data && response.data.message || "";
    };

    vm.save = function(item){
        CalciatoriService.saveItem(item,vm.loadItems);
    };
    
//    vm.view = function(id){
//        $location.path( '/atleti/'+id );
//    };
//    
//    vm.back = function(){
//        $location.path( '/atleti' );
//    };
    
    vm.del = function(id){
        CalciatoriService.delItem(id,vm.loadItems);
    };
    
    vm.init = function(){
        vm.id = $routeParams && $routeParams['id'] || false;
        if(vm.id){
            CalciatoriService.getItem(vm.id,vm.loadItem);
        }else{
            CalciatoriService.getList(vm.loadItems);
        }
    };
    
    vm.init();
}]);