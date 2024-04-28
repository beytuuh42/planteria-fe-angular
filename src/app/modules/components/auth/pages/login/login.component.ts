import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginToken } from '@app/core/models/login-token.model';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    console.log(this.loginForm.getRawValue());
    let user: ILoginToken = this.loginForm.getRawValue();
    this.authService.login(user).subscribe({
      next: (data) => {
        alert('Successful login!');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Wrong credentials!');
      },
    });
  }
}
