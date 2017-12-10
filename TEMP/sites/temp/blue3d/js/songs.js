(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap1' ),
		openbtn = document.getElementById( 'open-button1' ),
		closebtn = document.getElementById( 'close-button1' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleSongs );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleSongs  );
		}

		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleSongs();
			}
		} );
	}

	function toggleSongs() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-songs' );
		}
		else {
			classie.add( bodyEl, 'show-songs' );
		}
		isOpen = !isOpen;
	}

	init();

})();