import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListaComponent } from './components/tutorial-lista/tutorial-lista.component';
import { TutorialDetalleComponent } from './components/tutorial-detalle/tutorial-detalle.component';
import { AgregarTutorialComponent } from './components/agregar-tutorial/agregar-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'tutorial', component: TutorialListaComponent },
  { path: 'tutorial/:id', component: TutorialDetalleComponent },
  { path: 'agregar', component: AgregarTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
