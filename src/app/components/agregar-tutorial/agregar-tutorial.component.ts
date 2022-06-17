import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-agregar-tutorial',
  templateUrl: './agregar-tutorial.component.html',
  styleUrls: ['./agregar-tutorial.component.css']
})
export class AgregarTutorialComponent implements OnInit {
    tutorial: Tutorial = {
    titulo: '',
    descripcion: '',
    publicado: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  guardarTutorial(): void {
    const data = {
      titulo: this.tutorial.titulo,
      descripcion: this.tutorial.descripcion,
      publicado: false
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          alert('El tutorial fue creado satisfactoriamente!')
        },
        error => {
          console.log(error);
        });
  }

  nuevoTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      titulo: '',
      descripcion: '',
      publicado: false
    };
  }

}
