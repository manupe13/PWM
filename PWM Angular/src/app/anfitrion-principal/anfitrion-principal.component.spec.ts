import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPrincipalComponent } from './anfitrion-principal.component';

describe('AnfitrionPrincipalComponent', () => {
  let component: AnfitrionPrincipalComponent;
  let fixture: ComponentFixture<AnfitrionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
