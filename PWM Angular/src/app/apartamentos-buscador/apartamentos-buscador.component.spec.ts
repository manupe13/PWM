import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosBuscadorComponent } from './apartamentos-buscador.component';

describe('ApartamentosBuscadorComponent', () => {
  let component: ApartamentosBuscadorComponent;
  let fixture: ComponentFixture<ApartamentosBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartamentosBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentosBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
