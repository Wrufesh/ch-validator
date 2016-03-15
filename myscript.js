console.log('Hello World3');
window.onload = function() {
	var str = $( "form" ).serialize();
	console.log(str);
	$( "form" ).on( "submit", function( event ) {
	  event.preventDefault();
	  console.log("Inside submit event")
	  console.log( $( "form input[type=text]" ).serialize() );
	});
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }};