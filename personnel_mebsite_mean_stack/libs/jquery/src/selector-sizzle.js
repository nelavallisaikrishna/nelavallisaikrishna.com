define( [
	"./core",
	"../external/sizzle/dist/sizzle"
], function( jQuery, Sizzle ) {

<<<<<<< HEAD
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
=======
"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
<<<<<<< HEAD
=======
jQuery.escapeSelector = Sizzle.escape;
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988

} );
