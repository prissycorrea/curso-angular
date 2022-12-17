import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  //inicio o dado vazio
  @Input() name: string = '';
  //colocar a ! garante ao typescript que o dado será iniciado, não precisando iniciá-lo agora (definir valor)
  @Input() userData!: {email: string, role: string};

  constructor() { }

  ngOnInit(): void {

  }
}
