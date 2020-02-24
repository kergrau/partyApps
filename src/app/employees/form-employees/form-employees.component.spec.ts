import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployeesComponent } from './form-employees.component';

describe('FormEmployeesComponent', () => {
  let component: FormEmployeesComponent;
  let fixture: ComponentFixture<FormEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
