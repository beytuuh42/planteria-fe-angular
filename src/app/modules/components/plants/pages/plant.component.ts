import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.scss',
})
export class PlantComponent {}
