import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // com o @Input(), a propriedade 'nomeCurso' 
  // é exposta no seletor 'app-curso' e vinculada
  // ao atributo 'nome'
  @Input('nomeCurso') nome: string = ''; 
  
  constructor() { }

  ngOnInit() {
  }

}
