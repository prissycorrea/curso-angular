import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animals';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id")) //pegando o id
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
