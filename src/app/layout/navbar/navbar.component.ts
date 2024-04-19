import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSidenavExpanded = false;
  isSidenavElementExpanded = [false, false, false];

  toggleSidenav() {
    this.isSidenavExpanded = !this.isSidenavExpanded;
    console.log(this.isSidenavExpanded)
  }

  toggleSidenavElement(index: number) {
    this.isSidenavElementExpanded[index] =
      !this.isSidenavElementExpanded[index];
    console.log(this.isSidenavElementExpanded)
  }
}
