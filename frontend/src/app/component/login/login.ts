import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/userService/user-service';
import { LoginInterface } from '../../interface/user/loginInterface';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  
  constructor(private router: Router) {}

  userService = inject(UserService);

 newLogin : LoginInterface = {
   email: '',
   password: ''
 }
  
  confirmLogin(){
    this.userService.loginConfirm(this.newLogin).subscribe({
      next: (response : any) => {
        localStorage.setItem('token', response.token);
      this.router.navigate(['/feed']);
    },
    error: () => {
      alert("Login inválido");
    }
  });
  }
}