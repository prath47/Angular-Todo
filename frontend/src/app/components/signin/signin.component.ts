import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './../../services/authenticate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  imports: [FormsModule]
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthenticateService, private router: Router) {}

  ngOnInit(): void {
    const token = this.auth.getCookie('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  signup(): void {
    this.router.navigate(['/signup']);
  }

  signin(): void {
    const user = {
      email: this.email,
      password: this.password
    };
    this.auth.login(user).subscribe({
      next: (response) => {
        console.log('Signin successful:', response);
        this.router.navigate(['/']); 
      },
      error: (error) => {
        alert(error.error.message);
        console.error('Error signing in:', error);
      }
    });
  }
}