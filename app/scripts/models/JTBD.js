var JTBD = (function(){
	var ours = {};
    var jbtdTemplate = { //mostly for documentation
            id: '',
            productId: '',
            title: '',
            description: '',
            priority: '',
            //parents: [],
            //children: [],
            //related: [],
            //alternates: [],
            type: '' //functional(0), emotional/personal(1), emotional/social(2)
    };

    ours.createJob = function( title, productId, description, typeString, alternates ){
        if( title == null ) return Error( 'JTBD creation failed.' );
        var self = this;
        this.title = title;
		this.productId = productId;
        this.description = description;
        this.type = setJobType( typeString );
        //this.alternates = [];
		
		//privatish functions
		this.addParent = function( parent ){
			this.parents.push( parent );
		}
		this.removeParent = function( parentId ){
			_.remove( this.parents, parentId );
		}
		this.setParents = function( newParentsArray ){
			this.parents = newParentsArray;
		}
		this.removeParents = function(){
			this.parents = [];
		}
		this.setChildren = function( newChildrenArray ){
			this.children = newChildrenArray;
		}
		this.removeChilren = function(){
			this.children = [];
		}
		this.addChild = function( child ){
			this.children.push( child );
		}
		this.removeChild = function( childId ){
			_.remove( this.children, childId );
		}
		this.setAlternates = function( newAlternatesArray ){
			this.alternates = newAlternatesArray;
		}
		this.removeAlternates = function(){
			this.alternates = [];
		}
		this.addAlternate = function( alternate ){
			this.alternates.push( alternate );
		}
		this.removeAlternate = function( alternateId ){
			_.remove( this.alternates, alternateId );
		}
		this.setJtbdType = function( typeString ){
            setJobType( typeString );
		}
        function setJobType( typeString ){
            //defaults to functional (0)
			switch( typeString ){
					case 'social' || 2:
						this.type = 2; //emotional/social
					case 'personal' || 1:
						this.type = 1; //emotional/personal
					default:
						this.type = 0; //functional
			}
        }
        return this;
    };
	return ours;
}());