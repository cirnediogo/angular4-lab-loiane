import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: null,
      complemento: null
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  applyError(campo) {
    return {
      'has-error': this.verifyInvalidTouch(campo),
      'has-feedback': this.verifyInvalidTouch(campo)
    }
  }

  verifyInvalidTouch(campo) {
    return campo.invalid && campo.touched;
  }

}
