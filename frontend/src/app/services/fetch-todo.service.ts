import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchTodoService {
  http = inject(HttpClient);

  todos = signal([]);

  getTodosFromServer() {
    return this.http.get('http://localhost:5000/api/todos',{withCredentials: true});  
  }

  createTodo(todo) {
    return this.http.post('http://localhost:5000/api/todos/create', {
      title: todo.title,
      description: todo.description,
    },{withCredentials: true});
  }

  deleteTodoById(id) {
    return this.http.post('http://localhost:5000/api/todos/delete',{
      id
    },{withCredentials: true});  
  }
}
