import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService = inject(AuthService);
  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('logged out');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
