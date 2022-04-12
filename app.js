"use strict";
// model section
// if a local storage has a todos array, then use it
// Otherwise use the default array
let todo;

// retrieve localStorage
const savedTodo = JSON.parse(localStorage.getItem("todo"));
// check if it's an array
if (Array.isArray(savedTodo)) {
  todo = savedTodo;
} else {
  todo = [
    {
      title: "Get groceries",
      dueDate: "2022-05-11",
      id: "id1",
    },
    {
      title: "Wash car",
      dueDate: "2022-07-01",
      id: "id2",
    },
    {
      title: "Get groceries",
      dueDate: "2022-04-21",
      id: "id3",
    },
  ];
}

// creates a todo
function createTodo(title, dueDate) {
  const id = "" + new Date().getTime(); // it gets the current time in milliseconds + transforms the result into the string by using ''
  todo.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  saveTodos();
}
// deletes a todo
function removeTodo(idToDelete) {
  todo = todo.filter(function (todos) {
    // if the id of this matches idToDelete, return false
    // for everything else - return true
    if (todos.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

render();

//controller section
function addTodo() {
  const textBox = document.getElementById("todo-title"); // tells to get an html element by Id
  const title = textBox.value; // to get the data we've typed out of textBox

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createTodo(title, dueDate);

  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

//view section

function render() {
  //reset our list
  document.getElementById("todo-list").innerHTML = ""; //it will wipe out the list and replace it with empty string

  todo.forEach(function (todo) {
    const element = document.createElement("div"); // creates html element
    element.innerText = todo.title + "" + todo.dueDate; //it takes our div and it sets the text inside the div to be the value of todo1

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "margin-left: 12px";
    element.appendChild(deleteButton);
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element); // adds an element to the end of the body
  });
}
