
//When DOM loaded we attach click event to button
$(document).ready(function() {

  var sessionsAPI = "https://www.drupalcampnj.org/program/sessions/json?callback=?";
  var jqxhr = $.getJSON( sessionsAPI, function() {
    console.log( "success" );
  })
  .fail(function() {
    console.log( "error" );
  });
});
