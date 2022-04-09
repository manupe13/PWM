import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso4Component } from './anfitrion-paso4.component';

describe('AnfitrionPaso4Component', () => {
  let component: AnfitrionPaso4Component;
  let fixture: ComponentFixture<AnfitrionPaso4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
