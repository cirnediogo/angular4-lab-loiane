import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input('valorContador') valor: number = 0;
  @Output() alteracaoValor = new EventEmitter();
  @ViewChild('contadorInput') contadorInput: ElementRef;

  constructor() { }

  incrementar() {
    // console.log(this.contadorInput.nativeElement.value);
    this.contadorInput.nativeElement.value++;
    // this.valor++;
    // this.alteracaoValor.emit({novoValor: this.valor});
  }

  decrementar() {
    this.contadorInput.nativeElement.value--;
    // this.valor--;
    // this.alteracaoValor.emit({novoValor: this.valor});
  }

  ngOnInit() {
  }

}
