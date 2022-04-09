import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso6Component } from './anfitrion-paso6.component';

describe('AnfitrionPaso6Component', () => {
  let component: AnfitrionPaso6Component;
  let fixture: ComponentFixture<AnfitrionPaso6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
