import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr()
      .subscribe(dados => {
        this.estados = dados;
        console.log(this.estados);
      });

    /* Opção por instanciação de FormGroup */
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //     numero: new FormControl(null),
    //     complemento: new FormControl(null),
    //     rua: new FormControl(null),
    //     bairro: new FormControl(null),
    //     cidade: new FormControl(null),
    //     estado: new FormControl(null)
    //   })
    // });
    /* Opção por FormBuilder */
    this.formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        endereco: this.formBuilder.group({
          cep: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null],
          rua: [null, Validators.required],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required]
        })
    })
  }

  onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.http.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(
            res => this.onSubmitSuccess(res), 
            (err: any) => this.onSubmitError(err)
        );
    } else {
      console.log("formulario inválido.");
      this.verifyFormGroup(this.formulario);
    }
  }
  
  verifyFormGroup(formGroup: FormGroup) {
    // Object.keys(this.formulario.controls).forEach(function(campo) {
    // });
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      if (controle instanceof FormGroup) {
        this.verifyFormGroup(controle);
      } else {
        controle.markAsTouched(); // ou markAsDirty();
      }
    });
  }

  onSubmitSuccess(res) {
    console.log(res);
    this.resetForm();
  }
  
  resetForm() {
    this.formulario.reset();
  }
  
  onSubmitError(err) {
    console.log('erro: ');
    console.log(err);
  }

  applyError(campo: string) {
    return {
      'has-error': this.verifyInvalidTouch(campo),
      'has-feedback': this.verifyInvalidTouch(campo)
    }
  }

  verifyInvalidTouch(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verifyInvalidEmail(campo: string) {
    let campoEmail = this.formulario.get(campo);
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  consultarCep() {
    this.limparEndereco();
    //Variável "cep" somente com dígitos.
    let cep = this.formulario.get('endereco.cep').value;
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
      .subscribe(dados => this.preencherEndereco(dados));
  }

  preencherEndereco(dadosEndereco) {
    if ("erro" in dadosEndereco) {
      alert("CEP não encontrado.");
      return;
    }
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dadosEndereco.cep,
    //     rua: dadosEndereco.logradouro,
    //     bairro: dadosEndereco.bairro,
    //     cidade: dadosEndereco.localidade,
    //     estado: dadosEndereco.uf,
    //     complemento: dadosEndereco.complemento,
    //     numero: formulario.value.endereco.numero
    //   }
    // });
    // console.log(formulario);
    // this.formulario.patchValue({
    //   endereco: {
    //     cep: dadosEndereco.cep,
    //     rua: dadosEndereco.logradouro,
    //     bairro: dadosEndereco.bairro,
    //     cidade: dadosEndereco.localidade,
    //     estado: dadosEndereco.uf,
    //     complemento: dadosEndereco.complemento
    //   }
    // });
    this.formulario.get('endereco.cep').setValue(dadosEndereco.cep);
    this.formulario.get('endereco.rua').setValue(dadosEndereco.logradouro);
    this.formulario.get('endereco.bairro').setValue(dadosEndereco.bairro);
    this.formulario.get('endereco.cidade').setValue(dadosEndereco.localidade);
    this.formulario.get('endereco.estado').setValue(dadosEndereco.uf);
    this.formulario.get('endereco.complemento').setValue(dadosEndereco.complemento);
  }

  limparEndereco() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
        complemento: null
      }
    });
  }
 
}
