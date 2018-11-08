function sayBrowser () {
  var p = document.getElementById ("hello");
  p.innerHTML = "Hello, World!";
}
function sayPopup () {
  alert("Hello, World!")
}
function sayConsole () {
  var p =document.getElementById ()
  console.log ("Hello, World!")
}
function sayStranger () {
  var person = prompt ("Please enter your name:", "Your Name")
  if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "!";
    }
}
