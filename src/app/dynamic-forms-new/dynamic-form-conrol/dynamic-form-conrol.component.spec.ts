import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormConrolComponent } from './dynamic-form-conrol.component';

describe('DynamicFormConrolComponent', () => {
  let component: DynamicFormConrolComponent;
  let fixture: ComponentFixture<DynamicFormConrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormConrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormConrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
