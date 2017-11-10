import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos: string[];
  static emissorCriacaoCurso = new EventEmitter<string>();

  constructor() {
    this.cursos = ['Java', 'C++', 'Angular', 'Node'];
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    CursosService.emissorCriacaoCurso.emit(curso);
  }

}
