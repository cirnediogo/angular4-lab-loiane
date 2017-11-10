import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript',
    rating: 4.56784,
    preco: 44.99,
    numeroPaginas: 314,
    dataLancamento: new Date(2016, 5, 23)
  }

  constructor() { }

  ngOnInit() {
  }

}
