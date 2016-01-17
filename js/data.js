
//When DOM loaded we attach click event to button
$(document).ready(function() {

  //start ajax request
  $.ajax({
      url: "https://www.drupalcampnj.org/program/sessions/json",
      //force to handle it as text
      dataType: "text",
      success: function(data) {

          //data downloaded so we call parseJSON function
          //and pass downloaded data
          var json = $.parseJSON(data);
          console.log(json);
          //now json variable contains data in json format
          //let's display a few items
          //$('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
      }
  });

});
