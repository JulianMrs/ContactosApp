import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactos } from './contactos';
import { LowdbAsync } from 'lowdb';
import * as lowdb from 'lowdb'
import * as LocalStorage from 'lowdb/adapters/LocalStorage'
import * as FileAsync from "lowdb/adapters/FileAsync.js";
const adapter = new LocalStorage('db')
const db = lowdb(adapter)

@Injectable({
  providedIn: 'root'
})


export class ContactosService {

  constructor() { }
  
  getContactos()  {
    db.defaults({ posts: [] })
    .write()
  }
  
}
