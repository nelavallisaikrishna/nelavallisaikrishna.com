define( function() {
<<<<<<< HEAD
	return function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
=======
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
} );
