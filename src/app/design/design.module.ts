import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CartasComponent } from './cartas/cartas.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CuerpoComponent,
    NoticiasComponent,
    CartasComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NavbarComponent,
    CuerpoComponent,
    NoticiasComponent,
    CartasComponent,
    FooterComponent
  ]
})
export class DesignModule { }
