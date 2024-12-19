import { Component, OnInit } from '@angular/core';
import { FetchTodoService } from './../../services/fetch-todo.service';
import { signal } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoItems = signal([]);

  constructor(private todoService: FetchTodoService) {}
  ngOnInit(): void {
    this.todoService.getTodosFromServer().subscribe({
      next: (data: any) => {
        this.todoService.todos.set(data);
        this.todoItems.set(this.todoService.todos());
        console.log(this.todoService.todos);
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      }
    });
  }
  
  deleteTodo(id: string): void {
    this.todoService.deleteTodoById(id).subscribe({
      next: (response) => {
        this.todoService.todos.set(this.todoItems().filter((todo) => todo.id !== id))
        this.todoItems.set(this.todoService.todos());
        console.log('Todo deleted:', response);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }
}