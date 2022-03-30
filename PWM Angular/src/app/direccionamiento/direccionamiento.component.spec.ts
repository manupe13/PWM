import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionamientoComponent } from './direccionamiento.component';

describe('DireccionamientoComponent', () => {
  let component: DireccionamientoComponent;
  let fixture: ComponentFixture<DireccionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
