/**
 * Created by PK on 6/19/2015.
 */

//here $('') means its a jquery function for accessing elements $('document') means select entire document .
// ready() is a function $('document').ready() means that when entire doc. is ready then runs the anonymous function.
// It is the convention for using jquery we do our all work inside this function

//step#1

/*$('document').ready( function()
 {
 //alert("It works");
 });*/


//step#2:Id-selector
/* $('document').ready(function()
 {
 $('#article1').css("background-color","lavender");
 }

 );*/

/*$('document').ready(function()
 {
 // $('#article1 .para1' ).css("color","blue"); // $('#article1 .para1' ) select .para1 class which is inside the id article 1
 // $('article p').css('font-weight','bold');//$('article p') means all p tag which are placed inside article tags
 //$("#article2 p").css("font-weight","bold");
 });*/

//step#3:Class-selector

/*
 $('document').ready(function () {
 $('.para1').css("color","orange");

 });
 */


//step#4:Tag name-selector

/*$('document').ready(function () {
 $('div ol').css("background-color","lavender");
 $('div ol').css("padding","15px");
 $('li:eq(2)').css("text-decoration","underline");
 $('li:first').css("color","red");
 $('li:last').css("font-weight","bold");
 $('div > p').css("color","orange");
 $('tr:odd').css("background-color","lightblue");
 $("footer").css("background-color","black");
 $("footer").css("color","white");
 $("footer").css("padding","5px");



 });*/

//step#5 :traversing DOM
// for traversing we have each() method for iteration in jquery
/*
 $('document').ready(function(){

 $('.age').each(function(){
 if($(this).text()<=45&&$(this).text()>20)

 {

 $(this).css("background-color","lightgreen");


 }
 })
 });
 */


//step#6
//Inserting nodes....
$('document').ready(function()
{
    $('table').after("<div><h2>adding node after table tag</h2></div>");
    $('table').before("<div><h2>adding node before table tag</h2></div>");
    $('body').append("<p><h2>append node</h2></p>")//append add node at the last position
    $('body').prepend("<p><h2>prepend node</h2></p>")//prepend add node at the first position
});
