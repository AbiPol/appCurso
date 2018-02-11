import { Directive, HostListener, HostBinding } from '@angular/core';

/*decorador*/
@Directive({
  selector: '[appMenuitem]' /*muestra entre corchetes el nombre de nuestra directiva. Esta directiva
                              debe ir dentro de la etiqueta HTML en la que queramos que funcione
                              esta directiva*/
})
/** */
export class MenuitemDirective {
  /*Las clases importadas arriba se van implementar como decoradores dentro de esta clase.*/
  /*la clase HostBinding es una clase que enlaza con una clase(class.Itemorange) atraves de la
    propiedad mostrar.*/
  @HostBinding('class.itemOrange') private mostrar: Boolean = false;
  /*HostListener es una clase que esta escuchando, en este caso el evento mouseover*/
  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }
}
