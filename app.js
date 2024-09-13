var city=prompt("enter your city");
 if(city === "karachi"){
    alert("Welcome to city of lights");
}
var gender=prompt("enter your gender")
if(gender === "male") {
    alert("Good maorning Sir.");
}
else{
    alert("Good morning Ma'am.");
}
var Color=prompt("Enter signal color");
if (Color ==="red") {
    alert("Must stop");
}
else if(Color === "yellow"){
    alert("Ready to move")
}
else if(Color === "green"){
    alert("Move now")
}
var liter=prompt("enter fuel status")
if(liter <= "0.25liters"){
alert("Please refill the fuel in your car")
}
var a = 4;
if(++a === 5){
    alert("given conditon for variable a is ture.")
}
var b = 82;
if(b++ === 83){
    alert("given conditon for variable b is ture.")
}
var c = 12;
if(c++ === 13){
    alert( conditon for variable c is ture.")
}
var c = 12;
if(c === 13){
    alert("conditon for variable c is ture.")
}
if(++c < 13){
    alert( "conditon for variable c is ture.")
}
var c = 12;
if(c === 14){
    alert( "conditon for variable c is ture.")
}
var materialCost=20000
var laborCost=2000;
var totalCost= materialCost + laborCost
if(totalCost === laborCost + materialCost ){
    alert("The cost equals");
}
if(ture){
    alert("Ture")
}
if(false){
    alert("False");
}
if("car"<"car"){
    alert("car is smaller than car");
}
var number = prompt("Enter any number 1 to 10");
if(number === 2){
    alert("Bingo!")
}
else{
    alert("Close enough to the correct answer");
}
var number = prompt("enter any number")
if(number === 2,4,6,8,10){
    alert("this is even number")
}
else if(number === 3,5,1,7,9){
    alert("this is odd number")
} 
var number = prompt("enter any number")
if (number === number/3) {
    alert("the number is right")
}

document.write("<h1>Marks Sheet<h1/> " +"<br>"+"<br>");
var num1=300
var num2=219
var num3=(num2*100)/num1


document.write("Total marks : "+ num1 +"<br>");
document.write("obtained marks : "+ num2 +"<br>");
document.write("percentage : "+ num3 +"<br>");
if (num3 >= 80) {
    document.write("Grade : A-one. "+"<br>"+ "Remarks : Excellent")
}
else if (num3 >= 70){
    document.write("Grade : A."+"<br>"+"Remarks : Good")
}
else if (num3 >= 60){
    document.write("Grade : B"+"<br>"+"Remarks : you need to improve")
}
else if (num3 < 60){
    document.write("Grade : fail"+"<br>"+"Remarks : sorry")}