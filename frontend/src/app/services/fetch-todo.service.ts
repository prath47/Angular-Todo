import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchTodoService {
  http = inject(HttpClient);

  getTodosFromServer() {
    return this.http.post('http://localhost:5000/api/todos', {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTczNDU1NDI0NCwiZXhwIjoxNzM0NTU3ODQ0fQ.poUuQRSV8CJs7W8LjYg6QJ2MJwUydRDOhEH34fkxin0',
    });
  }

  createTodo(todo) {
    return this.http.post('http://localhost:5000/api/todos/create', {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTczNDU1NDI0NCwiZXhwIjoxNzM0NTU3ODQ0fQ.poUuQRSV8CJs7W8LjYg6QJ2MJwUydRDOhEH34fkxin0',
        title: todo.title,
        description: todo.description,
      });
    }

    deleteTodoById(id) {
      return this.http.post('http://localhost:5000/api/todos/delete', {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTczNDU1NDI0NCwiZXhwIjoxNzM0NTU3ODQ0fQ.poUuQRSV8CJs7W8LjYg6QJ2MJwUydRDOhEH34fkxin0',
          id,  
    });
  }
}
