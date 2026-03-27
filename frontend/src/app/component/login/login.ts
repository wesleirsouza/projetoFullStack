import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/userService/user-service';
import { LoginInterface } from '../../interface/user/loginInterface';
import { Router, RouterLink } from "@angular/router";
import { User } from '../../interface/user/user';

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
        const objeto = JSON.parse(response);
        localStorage.setItem('token', objeto.token);
        localStorage.setItem('userId', objeto.id);
        console.log(typeof response);
      this.router.navigate(['/feed']);
    },
    error: () => {
      alert("Login inválido");
    }
  });
  }

}