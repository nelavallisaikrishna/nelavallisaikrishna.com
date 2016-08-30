define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

<<<<<<< HEAD
jQuery.expr.filters.animated = function( elem ) {
=======
"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
