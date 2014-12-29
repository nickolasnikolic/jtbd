var Product = (function(){
	var ours = {};
    var productTemplate = {
        id: '',
        title: '',
        description: '',
        priority: '',
        alternates: []
    };
    //instantiate a new product
    ours.createProduct = function( title, description, priority, alternates ){
        this.title = title; //fail if not present
        this.description = description || '';
        this.priority = priority || 0;
        this.alternates = alternates || [];
        
        return this;
    };
    
    ours.setPriority = function( obj, priority ){
        obj.priority = priority;
    };
    
    ours.addAlternate = function( obj, alternate ){
        self.alternates.push( alternate );
    };
    
    ours.removeAlternate = function( obj, alternateId ){
        _.remove( obj.alternates, alternateId );
    }; 
	
	return ours;
}());