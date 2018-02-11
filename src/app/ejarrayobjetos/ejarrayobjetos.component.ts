import { Component, OnInit } from '@angular/core';
import {Alumno} from '../modelos/alumno.modelo';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  /*Javascript trabaja con el formato Json para definir objetos. Son pares clave:valor*/
  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Leo', apellidos: 'Polanco', ciudad: 'Tenerife'},
    {id: 2, nombre: 'Antonio', apellidos: 'Perez', ciudad: 'Pedraza'},
    {id: 3, nombre: 'Jorge', apellidos: 'Garcia', ciudad: 'Palencia'},
    {id: 4, nombre: 'Luis', apellidos: 'Lopez', ciudad: 'Valladolid'},
    {id: 5, nombre: 'Manolo', apellidos: 'Blanco', ciudad: 'Madrid'}];

  constructor() { }

  ngOnInit() {
  }

}
