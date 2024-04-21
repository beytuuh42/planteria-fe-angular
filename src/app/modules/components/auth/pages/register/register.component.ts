import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUser } from '@app/core/models/user.model';
import { AuthService } from '@app/core/services/auth/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onRegister(): void {
    console.log(this.registerForm.getRawValue());
    let user: IUser = this.registerForm.getRawValue();
    this.authService.register(user).subscribe({
      next: (data) => {
        console.log('Successful registration: ', data);
      },
      error: (error) => {
        console.log('Registration failed: ', error);
      },
    });
  }
}
