define( [
<<<<<<< HEAD
	"../data/var/dataPriv"
], function( dataPriv ) {
=======
	"../core",
	"../data/var/dataPriv",
	"../css/var/isHiddenWithinTree"
], function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {
<<<<<<< HEAD
			if ( display === "none" ) {

				// Restore a pre-hide() value if we have one
				values[ index ] = dataPriv.get( elem, "display" ) || "";
=======

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

<<<<<<< HEAD
				// Remember the value we're replacing
=======
				// Remember what we're overwriting
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
				dataPriv.set( elem, "display", display );
			}
		}
	}

<<<<<<< HEAD
	// Set the display of the elements in a second loop
	// to avoid the constant reflow
=======
	// Set the display of the elements in a second loop to avoid constant reflow
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

<<<<<<< HEAD
return showHide;

=======
jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
} );
