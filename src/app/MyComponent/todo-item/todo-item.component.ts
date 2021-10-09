import { Todo } from 'src/app/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Onclick has been trigger!');
  }
  onCheckboxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
