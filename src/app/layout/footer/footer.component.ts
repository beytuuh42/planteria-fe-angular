import { Component } from '@angular/core';
import { PlantService } from '@app/core/services/plant.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private plantService: PlantService) {
    //console.log("Mode: ", process.env)
    console.log("REST_API_URL: ", environment.REST_API_URL)
  }
}
