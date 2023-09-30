//var phrase = "Lajka";
//var age = 26;
/*var gps = 4.3;
var isMale = false;
var flaws = null;
var discription = undefined;*/

/*document.write(phrase);
document.write(phrase);
document.write(phrase);
document.write(phrase);
phrase = "Piri"
document.write(phrase);
document.write(phrase);
document.write(phrase);
document.write(phrase);

phrase = "My dog's names"
document.write(phrase);
document.write(phrase);
document.write(phrase);
document.write(phrase);
document.write("<br>");

var phrase = "Strings are fun!"
var text = "are cool!"
document.write(phrase.toUpperCase());
document.write("<br>");
document.write(phrase.charAt(8));
document.write("<br>");
document.write(phrase.indexOf("s"));
document.write("<br>");
document.write(phrase.lastIndexOf("o"));
document.write("<br>");
document.write(phrase.substring(0,6));
document.write("<br>");
document.write(phrase.substring(phrase.indexOf("g"),phrase.length));
document.write("<br>");
document.write(phrase.endsWith("fun"));
document.write("<br>");
document.write(phrase.endsWith("fun!"));
document.write("<br>");
document.write(phrase + " " + text);
document.write("<br>");
document.write("<hr/>")

document.write("Script.js")
// alert("The file is working")
document.write("<h3 style='color:navy;'>Javascript rules!</h3>")
document.write("<hr/>")

var number = -2
document.write(number+2*7)
document.write("<br>");
document.write(Math.abs(number))
document.write("<br>");
document.write(Math.max(number, 6))
document.write("<br>");
document.write(Math.min(number, 6))
document.write("<br>");
document.write(Math.pow(number, 3))
document.write("<br>");
document.write(Math.sqrt(36))
document.write("<br>");
document.write(Math.round(Math.random()*10))
document.write("<br>");
document.write("<hr/>")
document.write("<br>");
document.write("<br>");

var name = window.prompt("What is your name?")
var age = window.prompt("How old are you?")
document.write("Hello " + name + "! How are you today? Do you like being " + age + " years old?")

var num1 = window.prompt("Hello User! Enter a number")
var num2 = window.prompt("Enter another number")
num1 = parseFloat(num1)
num2 = parseFloat(num2)
document.write(num1 + num2)

//var fruits = new Array("Apples", "Oranges", "Peaches")
var fruits = ["Apples", "Oranges", "Peaches"]
fruits[0] = "Oranges"
document.write(fruits[0])
document.write("<br>")
document.write(fruits.length)
document.write("<br>")
document.write("<br>")
var fruits = "Apples, Oranges, Peaches"
fruits = fruits.split(",")
document.write(fruits[2])
*/
 function sayHi(name, age){
    //var name = "Joe"
    document.write("<h1>Hello " + name + "</h1>")
    document.write("<p>You are " + age + "</p>")
 }
 sayHi("Csenge", 26)
 sayHi("Sebastian", 30)

 function addition(num1, num2){
    return num1 * num2;
 }
 document.write(addition(4, 5));
