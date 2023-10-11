var image = document.getElementById("chef-salad")
   console.log("this is image")
   console.log(image)
   image.addEventListener("mouseout", function)(){
      this.style = "";
      this.width = "200"
   }

/*var image = document.getElementById("chef-salad")
   console.log("this is image")
   console.log(image)
   image.addEventListener("mouseover", function(){
      this.style = "box-shadow: 2px 2px 2px grey";
      this.width = "500"
      */


var isSweat = false
var isVegatable = true
var isCheses = true

if (isSweat) {
   document.write("You should try Golden dumpling with English cream")
} else if(isVegatable){
   document.write("You should try Chef salad")
} else if(isVegatable && isCheses){
   document.write("You should try Goat chese and spinich pie")
} else {
   document.write("Are you sure, you want to eat something?")
}