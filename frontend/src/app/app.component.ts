import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, HeaderComponent],
  template: `
    <app-header></app-header>
    <app-todo-list></app-todo-list>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}
