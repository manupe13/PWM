import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudContactarComponent } from './solicitud-contactar.component';

describe('SolicitudContactarComponent', () => {
  let component: SolicitudContactarComponent;
  let fixture: ComponentFixture<SolicitudContactarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudContactarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudContactarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
