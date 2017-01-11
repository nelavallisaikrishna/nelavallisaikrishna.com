define( function() {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
<<<<<<< HEAD
	/* jshint -W018 */
=======
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

} );
