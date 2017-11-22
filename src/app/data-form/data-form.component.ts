import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
        nome: [null],
        email: [null]
    })
  }

  onSubmit() {
    console.log(this.formulario);
    this.http.post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(res => console.log(res));
  }
 
}
