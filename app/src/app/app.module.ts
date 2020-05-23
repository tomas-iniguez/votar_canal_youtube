import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VotarComponent } from './pages/votar/votar.component';
import { GraficaComponent } from './pages/grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VotarComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
