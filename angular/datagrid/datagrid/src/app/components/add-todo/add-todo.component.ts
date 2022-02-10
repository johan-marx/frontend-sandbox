import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoTitle = '';
  @Output() createTodo = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.todoTitle.length > 3) {
      this.createTodo.emit(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
