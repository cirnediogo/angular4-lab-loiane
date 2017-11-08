import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input('valorContador') valor: number = 0;

  @Output() alteracaoValor = new EventEmitter();

  constructor() { }

  incrementar() {
    this.valor++;
    this.alteracaoValor.emit({novoValor: this.valor});
  }

  decrementar() {
    this.valor--;
    this.alteracaoValor.emit({novoValor: this.valor});
  }

  ngOnInit() {
  }

}
