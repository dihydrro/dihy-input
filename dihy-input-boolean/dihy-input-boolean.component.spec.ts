import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputBooleanComponent } from './dihy-input-boolean.component';

describe('DihyInputBooleanComponent', () => {
  let component: DihyInputBooleanComponent;
  let fixture: ComponentFixture<DihyInputBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
