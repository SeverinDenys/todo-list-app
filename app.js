"use strict";
const todo = [
  {
    title: "Get groceries",
    dueDate: "2022-05-11",
  },
  {
    title: "Wash car",
    dueDate: "2022-07-01",
  },
  {
    title: "Get groceries",
    dueDate: "2022-04-21",
  },
];

render();

function addTodo() {
  const textBox = document.getElementById("todo-title"); // tells to get an html element by Id
  const title = textBox.value; // to get the data we've typed out of textBox

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;
  todo.push({
    title: title,
    dueDate: dueDate,
  });

  render();
}

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

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element); // adds an element to the end of the body
  });
}
