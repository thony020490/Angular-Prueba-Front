import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-detalle',
  templateUrl: './tutorial-detalle.component.html',
  styleUrls: ['./tutorial-detalle.component.css']
})
export class TutorialDetalleComponent implements OnInit {

  currentTutorial: Tutorial = {
    id:'',
    titulo: '',
    descripcion: '',
    publicado: false,
  };

  mensaje = ''

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.mensaje='';
    this.obtenerTutorial(this.route.snapshot.params['id']);
  }

  obtenerTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  actualizarPublicado(estado: boolean): void {
    const data = {
      id : this.currentTutorial.id,
      titulo: this.currentTutorial.titulo,
      descripcion: this.currentTutorial.descripcion,
      publicado: estado
    };
    this.mensaje = '';
    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.publicado = estado;
          console.log(response);
          alert('El estado fue actualizado satisfactoriamente!');
        },
        error => {
          console.log(error);
        });
  }

  actualizarTutorial(): void {
    this.mensaje = '';
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          //this.mensaje = 'El tutorial fue actualizado satisfactoriamente!';
          alert('El tutorial fue actualizado satisfactoriamente!');
        },
        error => {
          console.log(error);
        });
  }


  eliminarTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          alert('el Tutorial fue eliminado exitosamente!');
          this.router.navigate(['/tutorial']);
        },
        error => {
          console.log(error);
        });
  }

}
