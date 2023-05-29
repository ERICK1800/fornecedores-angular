import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecComponent } from './fornec.component';

describe('FornecComponent', () => {
  let component: FornecComponent;
  let fixture: ComponentFixture<FornecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornecComponent]
    });
    fixture = TestBed.createComponent(FornecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
