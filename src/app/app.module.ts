import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    HomeComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
