import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialListaComponent } from './tutorial-lista.component';

describe('TutorialListaComponent', () => {
  let component: TutorialListaComponent;
  let fixture: ComponentFixture<TutorialListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
