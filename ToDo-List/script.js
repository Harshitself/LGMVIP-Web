//input field active

//add onclick event to add button to run newelement function
var addbtn = document.querySelector("#add");
addbtn.addEventListener("click", newElement);

// program to use enter key to take input
var input = document.querySelector("#myInput");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the function with a click
    newElement();
  }
});


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//search task in todo
var search = document.getElementById('searchtxt');

search.addEventListener('input', function abc() {

  var input = search.value.toLowerCase();
  var  ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName('li');
  var arrayLength =li.length;

  for (var i = 0; i < arrayLength; i++) {
   
    var task = li[i];
    var cardtxt = task.innerHTML.toLowerCase();

    if (cardtxt.includes(input)) {
     task.style.display = "block";
    } else {
     task.style.display = "none";
    }
  }
});



