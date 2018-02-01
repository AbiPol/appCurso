import { Component } from '@angular/core';

//Decorador con un objeto con 3 metadatos
@Component({
  selector: 'app-root', // Este componente se rendiza en la etiqueta que indica
  templateUrl: './app.component.html', //ruta relativa donde esta la plantilla HTML
  styleUrls: ['./app.component.css'] //Es un array donde se da la ruta relativa de losarchivos .CSS 
})

//Se exporta la clase para poder utilizar nuestra clase. Aqui va la logica de nuestro
export class AppComponent {
  title = 'app';
  destino: String = "Universo";
}
