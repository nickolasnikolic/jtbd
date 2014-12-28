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
    this.productList = [];
    
	this.all = function(){ return this.productList; };
	
    //add a product to the list
    this.add = function( product ){
        
        if( product.title == '' ){
            throw Error( "There is not a title for this product." );
        }
        
        this.productList.push( product );
    };
    
    //remove a product from the list
    this.remove = function( productId ){
        _.remove( this.productList, productId );
    };
}] );