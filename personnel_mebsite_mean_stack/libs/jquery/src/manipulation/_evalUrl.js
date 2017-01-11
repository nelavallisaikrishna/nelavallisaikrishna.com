define( [
	"../ajax"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
<<<<<<< HEAD
=======
		cache: true,
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
		async: false,
		global: false,
		"throws": true
	} );
};

return jQuery._evalUrl;

} );
