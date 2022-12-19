import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Logan", type: "Bunny", age: 3},
    {name: "Eevee", type: "Bunny", age: 1},
    {name: "Potter", type: "Cat", age: 2},
    {name: "Kira", type: "Cat", age: 1},
    {name: "Misa", type: "Cat", age: 1}
  ]

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
  }
}
