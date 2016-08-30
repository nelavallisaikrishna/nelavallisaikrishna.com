define( function() {
<<<<<<< HEAD

	// Match a standalone tag
	return ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
=======
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
>>>>>>> 22e0df6c90c13828c6dfe442d9c197d2e6010988
} );
