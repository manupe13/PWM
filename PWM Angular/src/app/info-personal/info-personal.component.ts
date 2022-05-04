import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  titulo = 'Cambio de Datos';
  mensaje=""
  cambio=false

  cambiarDatos(){
    this.cambio=true
    this.mensaje="cambios realizados con éxito"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
