import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user/user';
import { UserService } from '../../service/userService/user-service';

@Component({
  selector: 'app-user-registration',
  imports: [FormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.scss',
})
export class UserRegistration {

  userService = inject(UserService);

  newUser : User = {
    id: null,
    name: '',
    surname: '',
    telephone: null,
    email: '',
    password: ''
  }

  createUser(){
    this.userService.createUser(this.newUser).subscribe({
      next: (data : User) => {
        console.log(data);
      }
    })
  }
}