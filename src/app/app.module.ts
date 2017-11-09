import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { CursoComponent } from './curso/curso.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    CursoComponent,
    ContadorComponent,
    DiretivasComponent,
    FundoAmareloDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
