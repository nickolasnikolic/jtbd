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
      
    var productTemplate = {
        id: '',
        title: '',
        description: '',
        priority: '',
        alternates: []
    };
    
    var productList = [];
    
    //instantiate a new product
    var createProduct = function( title, discription, priority, alternates ){
        this.description = description;
        this.priority = priority;
        this.alternates = alternates;
        
        productList.push( this );
        
        return this;
    };
    
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
    
    var setPriority = function( index, priority ){
        productList[ index ].priority = priority;
    };
    
    var addAlternate = function( index, alternate ){
        productList[ index ].alternates.push( alternate );
    };
    
    var removeAlternate = function( index, alternateId ){
        _.remove( productList[ index ].alternates, alternateId );
    };
}] );