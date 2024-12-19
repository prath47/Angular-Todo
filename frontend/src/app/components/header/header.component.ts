import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Component, inject, Inject } from '@angular/core';
import { FetchTodoService } from './../../services/fetch-todo.service';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class HeaderComponent {
  showModal: boolean = false;
  todoTitle: string = '';
  todoDescription: string = '';
  auth = inject(AuthenticateService);
  cookie = this.auth.getCookie('token');

  constructor(@Inject(FetchTodoService) private fetchTodoService: FetchTodoService) {
    // console.log(this.showModal)
  }
  
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
        // alert(error.message);  
        console.error('Error adding todo:', error);
      }
    });
  }

  router = inject(Router)
  logout(): void {
    this.auth.logout().subscribe({
      next: (response) => {
        console.log('Logout successful:', response);
        this.cookie = null;
        this.router.navigate(['/signin']);
      },
      error: (error) => {
        console.error('Error logging out:', error);
      }
    })
    this.router.navigate(['/signin']);
  }

  login(): void {
    this.router.navigate(['/signin']);
  }
}