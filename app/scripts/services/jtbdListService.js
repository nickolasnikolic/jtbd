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
    this.jtbdList = [];
    
	this.all = function(){ return this.jtbdList; };
	
    this.add = function( job ){
        
        if( job.title == '' || job.productId == '' ){
            throw Error( "There is not a title or product for this Job to be Done." );
        }
        
        this.jtbdList.push( job );
    };
    
    this.remove = function( jobId ){
        //TODO: work will need to be done here to repair tree upon removal of a node
    };
}] );