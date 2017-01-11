define( [
	"../core",
	"./var/rnumnonpx",
	"./var/rmargin",
	"./var/getStyles",
	"./support",
	"../selector" // Get jQuery.contains
], function( jQuery, rnumnonpx, rmargin, getStyles, support ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
<<<<<<< HEAD
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
=======

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
<<<<<<< HEAD
		// http://dev.w3.org/csswg/cssom/#resolved-values
=======
		// https://drafts.csswg.org/cssom/#resolved-values
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

<<<<<<< HEAD
		// Support: IE9-11+
=======
		// Support: IE <=9 - 11 only
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
} );
