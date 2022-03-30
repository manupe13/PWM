import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnfitrionPaso1Component } from './anfitrion-paso1/anfitrion-paso1.component';
import { AnfitrionPaso2Component } from './anfitrion-paso2/anfitrion-paso2.component';
import { AnfitrionPaso3Component } from './anfitrion-paso3/anfitrion-paso3.component';
import { AnfitrionPaso4Component } from './anfitrion-paso4/anfitrion-paso4.component';
import { AnfitrionPaso5Component } from './anfitrion-paso5/anfitrion-paso5.component';
import { AnfitrionPaso6Component } from './anfitrion-paso6/anfitrion-paso6.component';
import { AnfitrionPaso7Component } from './anfitrion-paso7/anfitrion-paso7.component';
import { AnfitrionPrincipalComponent } from './anfitrion-principal/anfitrion-principal.component';
import { ApartamentosBuscadorComponent } from './apartamentos-buscador/apartamentos-buscador.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { ContactarComponent } from './contactar/contactar.component';
import { DejarValoracionComponent } from './dejar-valoracion/dejar-valoracion.component';
import { DireccionamientoComponent } from './direccionamiento/direccionamiento.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { IslaComponent } from './isla/isla.component';
import { LogInComponent } from './log-in/log-in.component';
import { MisAlojamientosComponent } from './mis-alojamientos/mis-alojamientos.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ProcesoReservaComponent } from './proceso-reserva/proceso-reserva.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { SolicitudContactarComponent } from './solicitud-contactar/solicitud-contactar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnfitrionPaso1Component,
    AnfitrionPaso2Component,
    AnfitrionPaso3Component,
    AnfitrionPaso4Component,
    AnfitrionPaso5Component,
    AnfitrionPaso6Component,
    AnfitrionPaso7Component,
    AnfitrionPrincipalComponent,
    ApartamentosBuscadorComponent,
    CondicionesComponent,
    ContactarComponent,
    DejarValoracionComponent,
    DireccionamientoComponent,
    FooterComponent,
    InfoPersonalComponent,
    IslaComponent,
    LogInComponent,
    MisAlojamientosComponent,
    MisReservasComponent,
    PrivacidadComponent,
    ProcesoReservaComponent,
    RegistrarseComponent,
    SeguridadComponent,
    SolicitudContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
