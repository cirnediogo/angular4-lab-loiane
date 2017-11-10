import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProfessorService {

  static emissorCriacao = new EventEmitter<string>();

  constructor() { }

  addProfessor(professor: string) {
    ProfessorService.emissorCriacao.emit(professor);
  }

}
