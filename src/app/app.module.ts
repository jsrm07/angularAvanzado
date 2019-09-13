import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//temporal
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import {PagesModule } from './pages/pages.module';

// Servicios
//import { SettingsService } from './services/services.index';
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';





@NgModule({
  /* Se declaran componentes */
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent    
  ],
  /* Se importan módulos */
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],  
  /* Proveen de Servicios */
  providers: [/* SettingsService */],

  /* Se ejecutan en el arranque de la aplicación */
  bootstrap: [AppComponent]
})
export class AppModule { }
