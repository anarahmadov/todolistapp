import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompletedtasksComponent } from '../completedtasks/completedtasks.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, CompletedtasksComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];
  completedTodos: string[] = [];

  addTodo() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';  // Clear input field after adding
    }
  }

  deleteTodo(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
  
  completeTask(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      // Move task to completed list
      this.completedTodos.push(todo);
      this.todos.splice(index, 1);
    }
  }

  restoreToTodoList(todo: string) {
    const index = this.completedTodos.indexOf(todo);
    if (index > -1) {
      // Move task to completed list
      this.todos.push(todo);
      this.completedTodos.splice(index, 1);
    }
  }
}