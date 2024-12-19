import { Component, inject } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  auth = inject(AuthenticateService);
  router = inject(Router);

  signin(): void {
    this.router.navigate(['/signin']);
  }

  signup(): void {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.auth.register(user).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
        console.log('Signup successful:', response);
      },
      error: (error) => {
        alert(error.error.message);
        console.error('Error signing in:', error);
      },
    });
  }
}
