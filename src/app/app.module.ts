import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// MODULOS
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

// RUTAS
import { APP_ROUTES } from './app.routes';

// SERVICIOS
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
