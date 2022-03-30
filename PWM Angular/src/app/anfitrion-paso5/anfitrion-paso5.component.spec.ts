import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso5Component } from './anfitrion-paso5.component';

describe('AnfitrionPaso5Component', () => {
  let component: AnfitrionPaso5Component;
  let fixture: ComponentFixture<AnfitrionPaso5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
