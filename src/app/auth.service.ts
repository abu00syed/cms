import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
   
    if (username === 'admin' && password === 'admin123') {
    
      sessionStorage.setItem('currentUser', JSON.stringify({ username: username }));
      return true; 
    } else {
      return false; 
    }
  }
  logout(): void {
   
    sessionStorage.removeItem('currentUser');
 
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    
    return !!sessionStorage.getItem('currentUser');
  }
}
