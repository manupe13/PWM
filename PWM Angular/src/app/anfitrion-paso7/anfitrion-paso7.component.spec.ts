import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso7Component } from './anfitrion-paso7.component';

describe('AnfitrionPaso7Component', () => {
  let component: AnfitrionPaso7Component;
  let fixture: ComponentFixture<AnfitrionPaso7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
