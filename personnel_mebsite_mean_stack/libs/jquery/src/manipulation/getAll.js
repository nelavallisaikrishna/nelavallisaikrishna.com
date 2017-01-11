define( [
	"../core"
], function( jQuery ) {

<<<<<<< HEAD
function getAll( context, tag ) {

	// Support: IE9-11+
=======
"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

return getAll;
} );
