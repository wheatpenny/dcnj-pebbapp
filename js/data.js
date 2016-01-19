
//When DOM loaded we attach click event to button
$(document).ready(function() {

  var sessionsAPI = "https://www.drupalcampnj.org/program/sessions/json?callback=?";
  var items = [];
  var jqxhr = $.getJSON( sessionsAPI, function(data) {
    var nodes = data.nodes;
    $.each( nodes, function( key, val ) {
      items.push("<label class='item'>" + val.node.Title + "<input id='session_list' type='checkbox' class='item-checkbox' value='" + val.node.UUID +"'></label>");
    });
  });

  jqxhr.complete(function() {
    $('.sessions').append(items);
  });
  });
