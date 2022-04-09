import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPaso2Component } from './anfitrion-paso2.component';

describe('AnfitrionPaso2Component', () => {
  let component: AnfitrionPaso2Component;
  let fixture: ComponentFixture<AnfitrionPaso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPaso2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
