import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FartopnavComponent } from './fartopnav.component';

describe('FartopnavComponent', () => {
  let component: FartopnavComponent;
  let fixture: ComponentFixture<FartopnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FartopnavComponent]
    });
    fixture = TestBed.createComponent(FartopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
