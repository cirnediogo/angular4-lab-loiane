import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: Http) { }

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

  consultarCep(cep) {
    console.log(cep);
    //Variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    if (cep == "") {
      //cep sem valor.
      return;
    }
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(!validacep.test(cep)) {
      //cep é inválido.
      alert("Formato de CEP inválido.");
      return;
    }
    // this.http.get("//viacep.com.br/ws/"+ cep +"/json");
    this.http.get(`//viacep.com.br/ws/${cep}/json`)
      .map(dados => dados.json())
      .subscribe(dados => console.log(dados));
  }

}
