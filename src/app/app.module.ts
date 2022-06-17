import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTutorialComponent } from './components/agregar-tutorial/agregar-tutorial.component';
import { TutorialDetalleComponent } from './components/tutorial-detalle/tutorial-detalle.component';
import { TutorialListaComponent } from './components/tutorial-lista/tutorial-lista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTutorialComponent,
    TutorialDetalleComponent,
    TutorialListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
