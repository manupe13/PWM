import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso1Component } from './anfitrion-paso1.component';

describe('AnfitrionPaso1Component', () => {
  let component: AnfitrionPaso1Component;
  let fixture: ComponentFixture<AnfitrionPaso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
