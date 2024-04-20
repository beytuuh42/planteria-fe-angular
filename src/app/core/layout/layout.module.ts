import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlantService } from '@app/core/services/plant.service';
import { MainComponent } from './main/main.component';

@NgModule({
  providers: [PlantService],
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
  ],
  exports: [NavbarComponent, FooterComponent, HeaderComponent, MainComponent],
})
export class LayoutModule {}
