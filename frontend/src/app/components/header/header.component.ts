import { FormsModule, NgModel } from '@angular/forms';
import { FetchTodoService } from './../../services/fetch-todo.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule]
})
export class HeaderComponent {
  showModal: boolean = false;
  todoTitle: string = '';
  todoDescription: string = '';

  constructor(@Inject(FetchTodoService) private fetchTodoService: FetchTodoService) {}

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  addTodo(): void {
    const todo = { title: this.todoTitle, description: this.todoDescription };
    this.fetchTodoService.createTodo(todo).subscribe({
      next: (response) => {
        console.log('Todo added:', response);
        this.toggleModal();  // Close the modal on success
      },
      error: (error) => {
        console.error('Error adding todo:', error);
      }
    });
  }
}