/*
This is where our custom JavaScript to manipulate the DOM 
and call the news API goes. This file gets executed as soon 
as its <script> import is processed at the bottom of index.html.
*/



/*
jQuery shorthand for document.ready.
This function executes when the DOM is done loading.
Put code that you want to execute on page load here.
*/
$(function() {
  var app = angular.module('home',[]);
  console.log("The DOM is ready!");

  app.controller("PanelController", function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

});


/*
Standalone functions here.
These can be called when needed.
*/
function myFunction() {
  
  // jQuery's .ajax method. Can be used to call RESTful apis to retrieve data.
  // More info at http://api.jquery.com/jquery.ajax/
  $.ajax({
    type: "GET",
    url: "http://html5news.herokuapp.com/articles/featured"
  })
  .done(function(result) { // executes after the AJAX call is made 
      
  })
  .fail(function(jqXHR, textStatus) {
    console.log( "Request failed: " + textStatus );
  });
};


function dayConverter(day) {
if(day === "Mon"){
  return "MONDAY";
}
else if (day === "Tue") {
  return "TUESDAY";
}
else if (day === "Wed"){
  return "WEDNESDAY";
}
else if (day === "Thu"){
  return "THURSDAY";
}
else if (day === "Fri"){
  return "FRIDAY";
}
else if (day ==="Sat"){
  return "SATURDAY";
}
else {
  return "SUNDAY";
}

}

var today = new Date().toString();
stringDay = dayConverter(today.substring(0,3))
var finalDate  = stringDay + ", " + (today.substring(4,10).toUpperCase()) + ", " +(today.substring(11,15));
document.getElementById('date').innerHTML= finalDate;

