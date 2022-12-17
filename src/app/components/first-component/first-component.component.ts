import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Logan';
  hobbies: string[] = ['Roer', 'Comer', 'Correr'];
  comidas = {
    comida1: "ração",
    comida2: "feno"
  }
  constructor() { }
  ngOnInit(): void {}
}
