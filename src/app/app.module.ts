import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { CursoComponent } from './curso/curso.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { MouseHighlightDirective } from './shared/mouse-highlight.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { LogService } from './shared/log.service';
import { LivroComponent } from './livro/livro.component';
import { CamelCasePipe } from './shared/camel-case.pipe';
import { SettingsService } from './shared/settings.service';
import { locale } from './config-properties';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ROUTING } from './app.routing';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    CursoComponent,
    ContadorComponent,
    DiretivasComponent,
    FundoAmareloDirective,
    MouseHighlightDirective,
    HighlightDirective,
    NgElseDirective,
    LivroComponent,
    CamelCasePipe,
    HomeComponent,
    LoginComponent,
    ProjetosComponent,
    TemplateFormComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    ROUTING
  ],
  providers: [
    LogService,
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: locale
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
