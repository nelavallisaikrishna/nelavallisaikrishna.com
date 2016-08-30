define( [
	"../../core"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

} );
