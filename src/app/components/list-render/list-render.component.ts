import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Logan", type: "Bunny"},
    {name: "Eevee", type: "Bunny"},
    {name: "Potter", type: "Cat"},
    {name: "Kira", type: "Cat"},
    {name: "Misa", type: "Cat"}
  ]
}
