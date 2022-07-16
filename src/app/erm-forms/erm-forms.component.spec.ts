import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErmFormsComponent } from './erm-forms.component';

describe('ErmFormsComponent', () => {
  let component: ErmFormsComponent;
  let fixture: ComponentFixture<ErmFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErmFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErmFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
