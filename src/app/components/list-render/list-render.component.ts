import { ListService } from './../../list.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [] //agora inicio com array vazio, pois os dados serão carregados da api

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe(); //subscribe = o evento foi executado
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((myAnimals) => (this.animals = myAnimals));
  } //acessa o services
}
