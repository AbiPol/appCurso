import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  /*le decimos a la propiedad del hijo que va a recibir un valor por la directiva Input
    Este valor se lo pasamos por la etiqueta del selector app-hijo*/
  @Input() aviso: string;
  @Output() mensajeMarcado = new EventEmitter;

  leido: boolean;
  mensaje: string;

  constructor() {
    this.leido = false;
   }

  ngOnInit() {
  }

  detectar(event) {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje); /*enviamos el mensaje.Se emite a traves de output*/
  }
  /*esta funcion viene de un evento, en este caso es click*/
  marcar(event) {
    this.leido = !this.leido;
  }
}
