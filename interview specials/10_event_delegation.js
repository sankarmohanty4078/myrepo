//The Problem : Imagine a shopping cart with 100 items.
const buttons = document.querySelectorAll(".delete");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Delete");
  });
});
// This means: 100 buttons -> 100 event listeners
// It works.But now imagine: 10,000 buttons -> 10,000 listeners
// We're attaching a separate listener to every child.

//Remember event bubbling:
// document
//   ↑
//  body
//   ↑
//  div
//   ↑
// button
// If you click the button: button.addEventListener("click", ...)
// the event doesn't just exist on the button. It bubbles upward.
// Instead of listening to every button...Listen to their common parent.
// better approach: instead attach one listener to the parent and that one listener handle all the events on children

//we do it by:
const products = document.querySelector("#products");
// products.addEventListener("click", deleteItem);
//problem: When we click a button, the listener belongs to products.
// How do we know which button was clicked? ans: event.target
products.addEventListener("click", function (event) {
  //event.taget returns The element where the event originally occurred.
  console.log(event.target); // <button>Delete</button>
});
//Execution flow:
// Step 1 - Event originates at: button
// Step 2 - It bubbles:
// products
//   ↑
// button
// Step 3 - The listener on products executes.
// function(event){
//     console.log(event.target);
// }
// Step 4 - event.target points to: button
//So we can identify which child caused the event.

//Programatic handling of the event using event delegation
//We Don't Want Every Click in the products div to work like the same
//suppose someone clicks on the buy button,we dont want delete handlers to respond to this click
products.addEventListener("click", function (event) {
  if (event.target.matches(".delete")) {
    console.log("Delete clicked");
  }
});
//This is event delegation.
//We're delegating the responsibility of handling child events to the parent.

//biggest advantage : dynalically added buttons will also respond to clicks using the parent's handler/listener
//we dont need to use newButton.addEventListener(...) unlike our traditional way
// where we used to add listener to every button so that they can listen and respond to events

//use of event.target.closest() or just closest() :
//closest() in one sentence : element.closest(selector) means:
// Starting from this element, check itself first, then move upward through its parents until
// you find the nearest element matching the selector.self -> parent -> grandparent -> great grandparent and so on
// It returns the element itself if it matches, otherwise the nearest matching ancestor.
const span = document.querySelector("span");
console.log(span.closest(".delete"));
//span.closest(".delete") returns <button>Delete <span>1</span></button> (the element with its children code)
//closest() returns an element, not true/false.
//if no self or parent element is found with the given selector closest() returns null
//If closest() didn't find anything, button is null, so stop.
element.closest(".delete"); // class selector
element.closest("#box"); // id selector
element.closest("button"); // element selector
element.closest("li"); // element selector
element.closest("[data-id]"); // attribute selector
element.closest("button.delete"); // combined selector

cart.addEventListener("click", function (event) {
  const button = event.target.closest(".delete");
  if (!button) {
    //even if we click on any other btn other than dlt btn
    //nothing will happen as button=null and if (!button) = if (!null) = if (true) and if body will be executed
    return;
  }
  const item = button.closest("li");
  item.remove();
});

//After the listener already exists:
//dynamic elements will also have the privilege of handling their events througth the listener in parent
const newItem = document.createElement("li");
newItem.innerHTML = `
    Orange
    <button class="delete">
        <span>Delete</span>
    </button>
`;
cart.append(newItem);
// We did not write: newButton.addEventListener(...)
// Yet clicking its Delete button works.

//target vs currentTarget
const list = document.getElementById("list");
list.addEventListener("click", function (event) {
  console.log(event.target); //the element that was clicked i.e. <span>Delete</span>
  console.log(event.currentTarget); // the element that the event listener was attached to ,here that is the whole list  <ul id="list"></ul>
  //currentTarget is always the element whose listener is currently executing.
});

//Real life use caes
// 1.in case of a todo list
// Todo list
//    ↓
// 1000 todo items
//    ↓
// 1000 delete buttons
// instead we can have:

// todoList
//    ↓
// 1 listener
// where we can use: event.target.closest(".delete");

// 2.Elements are dynamically created

// 3. Event Delegation + data-*

//   A very common pattern is:
// <div id="actions">
//     <button data-action="save">Save</button>
//     <button data-action="delete">Delete</button>
//     <button data-action="edit">Edit</button>
// </div>
// Then:

const actions = document.querySelector("#actions");
actions.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }
  const action = button.dataset.action;
  if (action === "save") {
    console.log("Saving");
  }
  if (action === "delete") {
    console.log("Deleting");
  }
  if (action === "edit") {
    console.log("Editing");
  }
});

// Event Delegation vs Direct Listeners
// Direct listeners
// button
//   ↓
// its own listener

// Good when:

// There are only a few elements.
// Each element has very different behavior.
// You don't need dynamic handling.
// Event delegation
// parent
//   ↓
// one listener
//   ↓
// many children

// Good when:

// There are many similar elements.
// Elements are dynamically created.
// Children share related behavior.
// You can rely on event bubbling.

// Event delegation is possible because events happen at runtime and bubble through the DOM;
// the parent doesn't need to know beforehand which children will exist.
