import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = {
    email: '',
    password: '',
  };
  handleSubmitForm(loginform: any) {
    if (loginform.valid) {
      console.log(loginform);
    }

    loginform.controls['email'].markAsTouched();
    loginform.controls['password'].markAsTouched();
  }
}
