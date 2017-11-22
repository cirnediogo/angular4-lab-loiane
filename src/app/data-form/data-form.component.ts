import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    /* Opção por instanciação de FormGroup */
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    /* Opção por FormBuilder */
    this.formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    console.log(this.formulario);
    this.http.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(
        res => this.onSubmitSuccess(res), 
        (err: any) => this.onSubmitError(err));
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

  applyError(campo) {
    return {
      'has-error': this.verifyInvalidTouch(campo),
      'has-feedback': this.verifyInvalidTouch(campo)
    }
  }

  verifyInvalidTouch(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verifyInvalidEmail(campo) {
    let campoEmail = this.formulario.get(campo);
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
 
}
