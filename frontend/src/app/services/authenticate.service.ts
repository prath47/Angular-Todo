import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  http = inject(HttpClient);
  
  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  login(user) {
    return this.http.post(
      'http://localhost:5000/api/users/login',
      {
        email: user.email,
        password: user.password,
      },
      { withCredentials: true }
    );
  }

  register(user) {
    return this.http.post(
      'http://localhost:5000/api/users/signup',
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      { withCredentials: true }
    );
  }

  logout() {
    return this.http.get('http://localhost:5000/api/users/logout', {
      withCredentials: true,
    });
  }
}
