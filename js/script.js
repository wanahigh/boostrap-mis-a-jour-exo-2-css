$( "#target" ).scroll(function() {
  $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
});
