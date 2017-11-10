import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro: any = {
    titulo: 'LeaRninG jaVascript',
    rating: 4.56784,
    preco: 44.99,
    numeroPaginas: 314,
    dataLancamento: new Date(2016, 5, 23)
  }

  constructor() { }

  ngOnInit() {
  }

  asyncPromisse = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resposta assíncrona'), 2000)
  });

  asyncObservable = Observable.interval(3000).map(
    valor => 'Outra resposta assíncrona'
  );

}
