angular.module('jtbdApp')
.factory( 'productListService', [function(){
    var dingle = {};

    dingle.list = [];

	dingle.all = function(){ return dingle.jtbdList; };

    dingle.self = function(){ return dingle; };
	
    //add a product to the list
    dingle.add = function( product ){
        //prep product object with empty jtbd list
        product.jtbdList = [];
        //add it to the stack
        dingle.list.push( product );
    };
    
    //remove a product from the list
    dingle.remove = function( productIndex ){
        dingle.list = dingle.list.splice( productIndex, 1 );
    };

    //add a product to the list
    dingle.addJtbd = function( jtbd, productIndex ){
        dingle.list[productIndex].jtbdList.push( jtbd );
    };

    //remove a product from the list
    dingle.removeJtbd = function( jtbdIndex, productIndex ){
        dingle.jtbdList = dingle.list[productIndex].jtbdList.splice( jtbdIndex, 1 );
    };

    return dingle;

}] );