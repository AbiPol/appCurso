import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga asi.';

  constructor() { }

  ngOnInit() {
  }

  modTexto(){
    this.texto = 'Y este es el texto una vez pulsado el botón';
  }
}
