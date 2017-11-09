import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[];

  constructor() {
    this.cursos = ['Java', 'C++', 'Angular', 'Node'];
  }

  getCursos() {
    return this.cursos;
  }

}
