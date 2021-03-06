import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  valorAtual = '';
  valorSalvo = '';
  nome = '';
  pessoa: any = {
    nome: 'John Doe',
    idade: 20
  };
  nomeCurso: string;

  constructor() {
    this.nomeCurso = 'Curso de Angular';
   }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value) {
    this.valorSalvo = value;
  }

  onAlteracaoValor(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
