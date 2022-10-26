// What is the "let"? Is it quite literally "letting" a new element be created? //

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// This is where I am struggling //

addToDoButton.addEventListener('click', function () {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = '';

  // I can see what the below code is doing, and how to actually input them, though the styling of the brackets is confusing and will take practice //

  paragraph.addEventListener('click', function () {
    paragraph.style.textDecoration = 'line-through';
  });
  paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
  });
});

// Not sure on how to add if statements, for example producing an error when a duplicate item is added so this function is not available //

if (condition1) {
  //  How do I know how to type the condition of "item has already been typed"?
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
