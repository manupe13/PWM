import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ProcesoReservaComponent } from './proceso-reserva/proceso-reserva.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { SolicitudContactarComponent } from './solicitud-contactar/solicitud-contactar.component';
import { HomeComponent } from './home/home.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { IslaComponent } from './isla/isla.component';
import { LogInComponent } from './log-in/log-in.component';
import { MisAlojamientosComponent } from './mis-alojamientos/mis-alojamientos.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

const routes: Routes = [
  {path: 'Paso1', component: AnfitrionPaso1Component, pathMatch: 'full' },
  {path: 'Paso2', component: AnfitrionPaso2Component, pathMatch: 'full' },
  {path: 'Paso3', component: AnfitrionPaso3Component, pathMatch: 'full' },
  {path: 'Paso4', component: AnfitrionPaso4Component, pathMatch: 'full' },
  {path: 'Paso5', component: AnfitrionPaso5Component, pathMatch: 'full' },
  {path: 'Paso6', component: AnfitrionPaso6Component, pathMatch: 'full' },
  {path: 'Paso7', component: AnfitrionPaso7Component, pathMatch: 'full' },
  {path: 'AnfitrionPrincipal', component: AnfitrionPrincipalComponent, pathMatch: 'full' },
  {path: 'ApartamentosBuscador', component: ApartamentosBuscadorComponent, pathMatch: 'full' },
  {path: 'Condiciones', component: CondicionesComponent, pathMatch: 'full' },
  {path: 'Contactar', component: ContactarComponent, pathMatch: 'full' },
  {path: 'DejarValoracion', component: DejarValoracionComponent, pathMatch: 'full' },
  {path: 'Direccionamiento', component: DireccionamientoComponent, pathMatch: 'full' },
  {path: 'Privacidad', component: PrivacidadComponent, pathMatch: 'full' },
  {path: 'ProcesoReserva', component: ProcesoReservaComponent, pathMatch: 'full' },
  {path: 'Registrarse', component: RegistrarseComponent, pathMatch: 'full' },
  {path: 'Seguridad', component: SeguridadComponent, pathMatch: 'full' },
  {path: 'SolicitudContactar', component: SolicitudContactarComponent, pathMatch: 'full' },
  {path: 'Home', component: HomeComponent, pathMatch: 'full' },
  {path: 'InfoPersonal', component: InfoPersonalComponent, pathMatch: 'full' },
  {path: 'Isla', component: IslaComponent, pathMatch: 'full' },
  {path: 'LogIn', component: LogInComponent, pathMatch: 'full' },
  {path: 'MisAlojamientos', component: MisAlojamientosComponent, pathMatch: 'full' },
  {path: 'MisReservas', component: MisReservasComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
