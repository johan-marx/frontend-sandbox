import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.css']
})

export class DataListItemComponent implements OnInit {
  @Input() todo;
  @Output() deleteTodo = new EventEmitter<Number>();
  @Output() checkTodo = new EventEmitter<Number>();
  @Output() uncheckTodo = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteTodo.emit(this.todo.id);
  }

  check() {
    this.checkTodo.emit(this.todo.id);
  }

  uncheck() {
    this.uncheckTodo.emit(this.todo.id);
  }
}
