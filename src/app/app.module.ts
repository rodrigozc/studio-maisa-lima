import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { ContatoComponent } from './components/contato/contato.component';
import { CursoComponent } from './components/curso/curso.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { ContatoService } from './services/contato.service';
import { GaleriaService } from './services/galeria.service';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CursoComponent,
    FooterComponent,
    GaleriaComponent,
    HeaderComponent,
    LoadingComponent,
    NavbarComponent,
    ServicosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ContatoService,
    GaleriaService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
