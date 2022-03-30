import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejarValoracionComponent } from './dejar-valoracion.component';

describe('DejarValoracionComponent', () => {
  let component: DejarValoracionComponent;
  let fixture: ComponentFixture<DejarValoracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DejarValoracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DejarValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
