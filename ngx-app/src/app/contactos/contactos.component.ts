import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contactos } from './contactos';
import { CONTACTOS } from './contactos.json';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html'
})
export class ContactosComponent implements OnInit {

  //El atributo contactos se rellena con un array de objetos contacto, de la clase contactos.json.ts.
  contactos: Contactos[];
  
  //Inyeccion de dependencias.
  constructor(private contactosService: ContactosService) { }
  
  ngOnInit(): void {

    this.contactos = CONTACTOS;
  }
  
  

}
