app.controller('SquadreController', [ '$routeParams', '$location', '$scope', 'SquadreService',
    function($routeParams, $location, $scope, SquadreService) {
    var vm = $scope;
    
    vm.id = null;
    vm.item = {};
    vm.items = [];
    
    vm.loadItem = function(response){
        
        vm.item = response.data && response.data.item;
        vm.message = response.data && response.data.message || "";
    };
    
    vm.resetItem = function(){
        vm.item = {
            id:0,
            allenatore:'',
            denominazione:'',
            datafondazione: null        
        };
        return vm.item;
    };
    
    vm.loadItems = function(response){
        console.info("LOAD RESPONSE: " + response);
        var list = response.data && response.data.items || [];
        vm.items.length = 0;
        
        angular.forEach(list, function(v,k){
            vm.items.push(v);
            console.info(v);
        });
        vm.message = response.data && response.data.message || "";
    };

    vm.save = function(item){
        console.log('save enter');
        console.log('item id:' + item.id);        
        console.info(item);
        SquadreService.saveItem(item,vm.loadItems);
        vm.resetItem();
    };
    
//    vm.view = function(id){
//        $location.path( '/atleti/'+id );
//    };
//    
//    vm.back = function(){
//        $location.path( '/atleti' );
//    };
    
    vm.del = function(id){
        SquadreService.delItem(id,vm.loadItems);
    };
    
    vm.init = function(){
        vm.id = $routeParams && $routeParams['id'] || false;
        if(vm.id){
            SquadreService.getItem(vm.id,vm.loadItem);
        }else{
            SquadreService.getList(vm.loadItems);
        }
    };
    
    vm.init();
}]);