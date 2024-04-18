import { Component } from '@angular/core';
import { PlantService } from '@app/core/services/plant.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private plantService: PlantService) {
    console.log('REST_API_URL: ', environment.baseUrl);
  }

  onReq() {
    console.log('onReq');
    let res = this.plantService.getAllPlants().subscribe((data) => {
      console.log(data);
    });
  }
}
