// listening for document ready
// will only run this code once DOM is "readu"
jQuery(document).ready(function() {

//this will ask jQuery to select the h1 node + change default text
	
	$("h1").text("???");

	$("p").text("GDB");

//this will select the parent + (space) + descendant selector

	$(".eight.columns h3");

//this will select only direct children of eight-columns class

	$(".eight.columns > li");

//selecting multiple elements
	
	$(".sixteen.columns, .five.columns");

//selecting css-like pseudo classes
	
	$(".five.columns").find("li");
	$("li").first().parent().text(":::::::");

//select

	$('button').click(function(){
 	alert("Hey you ;)");
	})

});