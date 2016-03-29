// Version: 1.0
// Works for all forms with submit event except form in iframe from cross site
$(document).ready(function() {
	// alert("document is ready");
	// var str = $( "form" ).serialize();
	// console.log(str);
	$( "form" ).on( "submit", function( event ) {
	    alert('just form submit happened');
	    console.log("Inside submit event")
	  // var str = $( "form" ).serialize();
	    alert( $( "form input[type=text]" ).serialize() );
	    alert( $( "form input[type=password]" ).serialize() );
	    event.preventDefault();
	});
	$("input").on("click", function(event){
	    // event.stopPropagation();
	    // return false;
		alert('we are in input on click');
	    alert( $( "form input[type=text]" ).serialize() );
	    alert( $( "form input[type=password]" ).serialize() );
	});
	$("a").on("click", function(event){
	    // event.stopPropagation();
	    // return false;
		alert('we are in input on click');
	    alert( $( "form input[type=text]" ).serialize() );
	    alert( $( "form input[type=password]" ).serialize() );
	    
	    alert( $( "input[type=text]" ).serialize() );
	    alert( $( "input[type=password]" ).serialize() );
	})
    });
