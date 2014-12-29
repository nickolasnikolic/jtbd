'use strict';

/**
 * @ngdoc Service
 * @name jtbdApp.service:productSrvc
 * @description
 * # This is the product service and a root model (but not yet main model) of the app
 * Service and model of the jtbdApp
 */
angular.module('jtbdApp')
.service( 'productListService', [function(){
    var productList = [];
    var increment = 0;
	this.all = function(){ return productList; };
	
    //add a product to the list
    this.add = function( product ){
        
        if( product.title == '' ){
            throw Error( "There is not a title for this product." );
        }
        product.id = increment++;
        productList.push( product );
		console.log( productList.length );
		console.log( increment );
    };
    
    //remove a product from the list
    this.remove = function( productId ){
        _.remove( productList, productId );
    };
}] );