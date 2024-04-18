import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '@layout//footer/footer.component';
import { HeaderComponent } from '@layout//header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlantService } from '@app/core/services/plant.service';

@NgModule({
  providers: [
    PlantService
  ],
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
