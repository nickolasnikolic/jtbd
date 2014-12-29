var JTBD = (function(){
	var ours = {};
    var jbtdTemplate = { //mostly for documentation
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

    ours.createJob = function( title, description, type, alternates ){
        if( title == null ) return Error( 'JTBD creation failed.' );

        this.title = title;
        this.description = description;
        this.type = setJtbdType( type );
        this.alternates = setAlternates( alternates );
		
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
        return this;
    };
	
	return ours;
}());