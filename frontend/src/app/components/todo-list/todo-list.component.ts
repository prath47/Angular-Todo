import { Component, inject, OnInit, signal } from '@angular/core';
import { FetchTodoService } from '../../services/fetch-todo.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  http = inject(HttpClient);
  todoService = inject(FetchTodoService);
  todoItems = signal([]);
  ngOnInit(): void {
    this.todoService
      .getTodosFromServer()
      .pipe(
        catchError((error) => {
          console.log('Error fetching todos', error);
          throw error;
        })
      )
      .subscribe((data: any) => {
        this.todoItems.set(data);
      });
  }

  deleteTodo(id): void {
    this.todoService.deleteTodoById(id).subscribe({
      next: (response) => {
        this.todoItems.set(this.todoItems().filter((todo) => todo.id !== id));
        console.log('Todo deleted:', response);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }
}
