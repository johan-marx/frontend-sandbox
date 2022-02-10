import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  public todos  = [];
  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => {
      this.todos = json;
    });
  }

  checkTodo(id) : void {
    this.todos.forEach(function(part, index, theArray) {
      if (part.id == id) {
        theArray[index].completed = true;
      }
    });
  }

  uncheckTodo(id) : void {
    this.todos.forEach(function(part, index, theArray) {
      if (part.id == id) {
        theArray[index].completed = false;
      }
    });
  }

  deleteTodo(id) : void {
    this.todos.forEach(function(part, index, theArray) {
      if (part.id == id) {
        theArray.splice(index, 1);
      }
    });
  }

  addTodo(title) : void {
    this.todos.unshift(
      {
        id: Math.floor(Math.random() * 10000) + 101,
        title: title,
        completed: false
      }
    )
  }
}
