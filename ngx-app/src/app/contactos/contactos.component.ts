import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contactos } from './contactos';
import { CONTACTOS } from './contactos.json';
import { ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html'
})
export class ContactosComponent implements OnInit {

  //El atributo contactos se rellena con un array de objetos contacto, de la clase contactos.json.ts.
  contactos: Contactos[];

  public contacto: Contactos = new Contactos()
  @ViewChild("myModalCreateContact", { static: false }) myModalCreateContact: TemplateRef<any>;
  @ViewChild("myModalViewContact", { static: false }) myModalViewContact: TemplateRef<any>;
  //Inyeccion de dependencias.
  constructor(private contactosService: ContactosService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.contactos = CONTACTOS;
  }

  mostrarModalContact() {
    this.modalService.open(this.myModalCreateContact);
  }
  mostrarModalViewContact() {
    this.modalService.open(this.myModalViewContact);
  }

  crearContacto(): Number {
    return CONTACTOS.unshift({
      nombre: this.contacto.nombre, apellido: this.contacto.apellido, telefono: this.contacto.telefono,
      direccion: this.contacto.direccion, fechaNacimiento: this.contacto.fechaNacimiento, tecnologias: this.contacto.tecnologias
    })
  }




}
