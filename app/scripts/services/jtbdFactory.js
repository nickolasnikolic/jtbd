'use strict';

/**
 * @ngdoc Service
 * @name jtbdApp.service:jtbdSrvc
 * @description
 * # This is the main service and main model of the app
 * Service and model of the jtbdApp
 */
angular.module('jtbdApp')
.factory( 'jtbdFactory', [ function(){
        
    var jbtdTemplate = { 
        id: '',
        productId: '',
        title: '',
        description: '',
        priority: '',
        parents: [],
        children: [],
        related: [],
        alternates: [],
        type: { 
            functional: false,
            emotional: {
                personal: false,
                social: false
            }
            
        }
    };
    
    var createJob = function( title, description, type, alternates ){
        this.title = title;
        this.description = description;
        this.type = setJtbdType( type );
        this.alternates = setAlternates( alternates );
        
        return this;
    };
    
    //privatish functions
    function addParent( parent ){
        this.parents.push( parent );
    }
    function removeParent( parentId ){
        _.remove( this.parents, parentId );
    }
    function setParents( newParentsArray ){
        this.parents = newParentsArray;
    }
    function removeParents(){
        this.parents = [];
    }
    function setChildren( newChildrenArray ){
        this.children = newChildrenArray;
    }
    function removeChilren(){
        this.children = [];
    }
    function addChild( child ){
        this.children.push( child );
    }
    function removeChild( childId ){
        _.remove( this.children, childId );
    }
    function setAlternates( newAlternatesArray ){
        this.alternates = newAlternatesArray;
    }
    function removeAlternates(){
        this.alternates = [];
    }
    function addAlternate( alternate ){
        this.alternates.push( alternate );
    }
    function removeAlternate( alternateId ){
        _.remove( this.alternates, alternateId );
    }
    function setJtbdType( typeString ){
        //defaults to functional
        switch( typeString ){
                case 'social':
                    this.type.emotional.social = true;
                case 'personal':
                    this.type.emotional.personal = true;
                default:
                    this.type.functional = true;
        }
    }
}] );