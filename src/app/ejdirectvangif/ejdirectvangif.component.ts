import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectvangif',
  templateUrl: './ejdirectvangif.component.html',
  styleUrls: ['./ejdirectvangif.component.css']
})
export class EjdirectvangifComponent implements OnInit {

  nombre: string;
  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado(){
    return this.capital === 'Madrid' ? true : false;
  }

}
