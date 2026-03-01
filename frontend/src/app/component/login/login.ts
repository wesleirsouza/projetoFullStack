import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/userService/user-service';
import { LoginInterface } from '../../interface/user/loginInterface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  userService = inject(UserService);

 newLogin : LoginInterface = {
   email: '',
   password: ''
 }

  confirmLogin(){
    this.userService.loginConfirm(this.newLogin).subscribe({
      next: (response) => {
        console.log("NEXT executado", response);
        alert("Login realizado!");
      },
      error: (error: any) => {
        console.log("ERROR executado", error);
        alert("Erro detectado");
      }
    });
  }
}