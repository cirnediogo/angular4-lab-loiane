import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor/professor.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [
    CursosService
  ]
})
export class CursosComponent implements OnInit {

  cursos: string[];

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    ProfessorService.emissorCriacao.subscribe(
      // function(curso) {
      //   console.log("Recebi o novo professor: " + professor);
      // }
      professor => console.log("Recebi o novo professor: " + professor) //equivalente ao código acima
    );
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
