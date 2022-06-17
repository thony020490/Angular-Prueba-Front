import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-lista',
  templateUrl: './tutorial-lista.component.html',
  styleUrls: ['./tutorial-lista.component.css']
})
export class TutorialListaComponent implements OnInit {
  tutoriales?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  titulo = '';

  constructor(private tutorialService : TutorialService) { 
  }

  ngOnInit(): void {
    this.obtenerTutoriales();
  }
  
  obtenerTutoriales(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutoriales = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  buscarTitulo(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
    this.tutorialService.findByTitle(this.titulo)
      .subscribe(
        data => {
          this.tutoriales = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActivarTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}
