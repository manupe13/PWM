import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso3Component } from './anfitrion-paso3.component';

describe('AnfitrionPaso3Component', () => {
  let component: AnfitrionPaso3Component;
  let fixture: ComponentFixture<AnfitrionPaso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
