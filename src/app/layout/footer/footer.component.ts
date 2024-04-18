import { Component } from '@angular/core';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor() {
    console.log("DB_NAME: ", environment.REST_API_URL)
  }
}
