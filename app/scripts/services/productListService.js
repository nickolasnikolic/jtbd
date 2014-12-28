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
    
    //add a product to the list
    var add = function( product ){
        
        if( product.title == '' ){
            throw Error( "There is not a title for this product." );
        }
        
        productList.push( product );
    };
    
    //remove a product from the list
    var remove = function( productId ){
        _.remove( productList, productId );
    };
}] );