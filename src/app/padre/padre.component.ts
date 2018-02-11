import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  valorPadre: String = 'Este valor es enviado desde el padre hacia el hijo';

  avisos: string[] = ['aviso1', 'Aviso2', 'Aviso3'];
  texto: string;

  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje(event) {
    this.texto = event + ' marcado como leido.';
  }

}
