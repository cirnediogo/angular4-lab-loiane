import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  private cursos: string[];
  static emissorCriacaoCurso = new EventEmitter<string>();

  constructor(private logService: LogService) {
    this.cursos = ['Java', 'C++', 'Angular', 'Node'];
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos.')
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog('Criando um novo curso: ' + curso);
    this.cursos.push(curso);
    CursosService.emissorCriacaoCurso.emit(curso);
  }

}
