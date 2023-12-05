import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peccu30yearsComponent } from './peccu30years.component';

describe('Peccu30yearsComponent', () => {
  let component: Peccu30yearsComponent;
  let fixture: ComponentFixture<Peccu30yearsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Peccu30yearsComponent]
    });
    fixture = TestBed.createComponent(Peccu30yearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
