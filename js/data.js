
//When DOM loaded we attach click event to button
$(document).ready(function() {

  var sessionsAPI = "https://www.drupalcampnj.org/program/sessions/json?callback=?";
  var jqxhr = $.getJSON( sessionsAPI, function() {
    console.log(data);
    var items = [];
    $.each( data, function( key, val ) {
      //items.push( "<li id='" + key + "'>" + val + "</li>" );
      console.log (key value);
    });
  })
  .fail(function() {
    console.log( "error" );
  });
});
