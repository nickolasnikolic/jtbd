'use strict';

/**
 * @ngdoc Service
 * @name jtbdApp.service:jtbdSrvc
 * @description
 * # This is the main service and main model of the app
 * Service and model of the jtbdApp
 */
angular.module('jtbdApp')
.service( 'jtbdListService', [ function(){
    var jtbdList = [];
    
	this.all = function(){ return jtbdList; };
	
    this.add = function( job ){
        
        if( job.title == '' || job.productId == '' ){
            throw Error( "There is not a title or product for this Job to be Done." );
        }
        
        jtbdList.push( job );
    };
    
    this.remove = function( jobId ){
        //TODO: work will need to be done here to repair tree upon removal of a node
        //for now, simply splice it and worry about the binary tree later
        jtbdList = jtbdList.splice( jobId, 1 );
    };
    
    this.resetList = function( setArray ){
        if( !setArray instanceof Array ){ return false };
        jtbdList = setArray;
        return true;
    };
    
}] );