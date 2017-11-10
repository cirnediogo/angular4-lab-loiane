import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../professor/professor.service';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
  providers: [
    ProfessorService
  ]
})
export class CursoDetalheComponent implements OnInit {

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
  }
  
  onAddProfessor(professor: string) {
    this.professorService.addProfessor(professor);
  }

}
