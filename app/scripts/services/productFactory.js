'use strict';

/**
 * @ngdoc Service
 * @name jtbdApp.service:productSrvc
 * @description
 * # This is the product service and a root model (but not yet main model) of the app
 * Service and model of the jtbdApp
 */
angular.module('jtbdApp')
.factory( 'productFactory', [function(){
    
	var bullet = {};
	
    var productTemplate = {
        id: '',
        title: '',
        description: '',
        priority: '',
        alternates: []
    };
    
    bullet.productList = [];
    
    //instantiate a new product
    bullet.createProduct = function( title, discription, priority, alternates ){
        this.title = title;
        this.description = description || '';
        this.priority = priority || 0;
        this.alternates = alternates || [];
        
        add( this );
        
        return this;
    };
    
    //add a product to the list
    bullet.add = function( product ){
        
        if( product.title == '' ){
            throw Error( "There is not a title for this product." );
        }
        
        productList.push( product );
    };
    
    //remove a product from the list
    bullet.remove = function( productId ){
        _.remove( productList, productId );
    };
    
    bullet.setPriority = function( index, priority ){
        productList[ index ].priority = priority;
    };
    
    bullet.addAlternate = function( index, alternate ){
        productList[ index ].alternates.push( alternate );
    };
    
    bullet.removeAlternate = function( index, alternateId ){
        _.remove( productList[ index ].alternates, alternateId );
    };
    
    return bullet;
    
}] );