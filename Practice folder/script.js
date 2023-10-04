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

var header = document.getElementById("header")
header.innerHTML = "Csenge"
header.style.color = "darkgreen"
header.style.backgroundColor = "lightgreen"

function handleClick(element){
   //alert("Clicked")
   element.innerHTML = "Clicked"
   element.style = "background-color:yellow"
   var image = document.getElementById("sefsalata")
   console.log("this is image")
   console.log(image)
   image.addEventListener("mouseover", function(){
      this.style = "box-shadow: 2px 2px 2px grey";
      this.width = "500"
   })
   var image = document.getElementById("sefsalata")
   console.log("this is image")
   console.log(image)
   image.addEventListener("mouseout", function(){
      this.style = "";
      this.width = "200"
   })
   
var bla = document.getElementById("bla");
console.log(bla)
var text = document.getElementById("textbox");
var button = document.getElementById("button");
button.addEventListener("click", function(){
   var newBla = document.createElement("li");
   newBla.innerHTML = textbox.value;
   bla.appendChild(newBla);
   console.log("hello");
   textbox.value = "";
})

//if statement
var isMale = false
var isTall = true
if (isMale && isTall) {
//   if (isMale || isTall) {
   document.write("You are a tall male")
} else if(isMale && !isTall){
   document.write("You are a short male")
} else if(!isMale && isTall){
   document.write("You are not male but you are tall")
} else {
   document.write("You are not tall and not a male")
}

//If Statements max number
function max(num1, num2, num3){
   if(num1 >= num2 && num1 >= num3){
      return num1
   } else if(num2 >= num1 && num2 >= num3){
      return num2
   } else{
      return num3
   }
}
document.write(max(24, 15, 6))

//Switch Statements
function getDayName(dayNum){
   var day
   //if(dayNum == 0){
      //day = "Sunday"
   //} else if(dayNum = 1){
      //day = "Monday"
   //}
   switch(dayNum){
      case 0:
         day = "Sunday"
         break
      case 1:
         day = "Monday"
         break
      case 2:
         day = "Tuesday"
         break
      case 3:
         day = "Wednesday"
         break
      case 4:
         day = "Thursday"
         break
      case 5:
         day = "Friday"
         break
      case 6:
         day = "Saturday"
         break
      default:
         day = "Day doesn't exit, " + dayNum + " isn't a valid number!"
   }
   return day
}
document.write(getDayName(5))

//Objects
//var fruits = ["Apples", "Orange"]
var person = {
   name: "Csenge",
   age: 26,
   isMale: false,
   occupation: "HR generalist",
   occupation: "Junior programmer",
   printName: function(){
      document.write("<h1>"+ this.name +"</h1>")
   }
}
//person.age = 25
//document.write(person.age + person.name)
person.printName()

//Real world objects
var myMovie = {
   title: "The Social Network",
   realeaseYear: "2020",
   duration: 2.0,
   actors: [
      {
         name: "Jessie Eisenberg",
         birthday: new Date("October 5, 1983"),
         hometown: "New York, New York"
      },
      {
         name: "Rooney Mara",
         birthday: new Date("April 17, 1985"),
         hometown: "Bedford, New York"
      }
   ]
}
document.write(myMovie.actors[1].hometown)
*/
//While Loops
var i = 1;
while(i <= 10){
   document.write(i + "<br/>");
   i++;
}