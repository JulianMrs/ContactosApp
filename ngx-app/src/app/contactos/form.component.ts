import { Component, OnInit } from '@angular/core';
import { CONTACTOS } from './contactos.json';
import { Contactos } from './contactos';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public contacto: Contactos = new Contactos()
  constructor() { }

  ngOnInit(): void {

  }

  crearContacto(): Number {
    return CONTACTOS.unshift({
      nombre: this.contacto.nombre, apellido: this.contacto.apellido, telefono: this.contacto.telefono,
      direccion: this.contacto.direccion, fechaNacimiento: this.contacto.fechaNacimiento, tecnologias: this.contacto.tecnologias
    })
  }

}
