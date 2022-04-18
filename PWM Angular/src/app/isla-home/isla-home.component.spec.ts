import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslaHomeComponent } from './isla-home.component';

describe('IslaHomeComponent', () => {
  let component: IslaHomeComponent;
  let fixture: ComponentFixture<IslaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
