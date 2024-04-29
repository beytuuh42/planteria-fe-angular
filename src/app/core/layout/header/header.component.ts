import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  router = inject(Router);
  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        alert('logged out');
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
