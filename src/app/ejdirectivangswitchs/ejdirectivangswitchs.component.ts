import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitchs',
  templateUrl: './ejdirectivangswitchs.component.html',
  styleUrls: ['./ejdirectivangswitchs.component.css']
})
export class EjdirectivangswitchsComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Fernando Martin', equipo: 'Real Madrid'},
    {nombre: 'Epi', equipo: 'Barsa'},
    {nombre: 'Jonh Pinone', equipo: 'Estudiantes'},
    {nombre: 'Jordi Villacampa', equipo: 'Juventud de Badalona'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
