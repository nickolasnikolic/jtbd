angular.module('jtbdApp')
.factory( 'productListService', [function(){
    var dingle = {};

    dingle.jtbdList = [];

	dingle.all = function(){ return dingle.jtbdList; };

    dingle.self = function(){ return dingle; };
	
    //add a product to the list
    dingle.add = function( product ){
        if( product.title == '' ){
            throw Error( "There is not a title for this product." );
        }
        dingle.jtbdList.push( product );
    };
    
    //remove a product from the list
    dingle.remove = function( productId ){
        dingle.jtbdList = dingle.jtbdList.splice( productId, 1 );
    };
    
    dingle.resetList = function( setArray ){
        if( !setArray instanceof Array ){ return false };
        dingle.jtbdList = setArray;
        return true;
    };

    return dingle;

}] );