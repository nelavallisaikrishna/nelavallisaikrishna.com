define( [
	"../core"
], function( jQuery ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

<<<<<<< HEAD
	// Support: IE9
=======
	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

} );
