import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolloansComponent } from './schoolloans.component';

describe('SchoolloansComponent', () => {
  let component: SchoolloansComponent;
  let fixture: ComponentFixture<SchoolloansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolloansComponent]
    });
    fixture = TestBed.createComponent(SchoolloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
