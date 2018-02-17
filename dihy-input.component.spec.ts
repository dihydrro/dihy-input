import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputComponent } from './dihy-input.component';

describe('DihyInputComponent', () => {
  let component: DihyInputComponent;
  let fixture: ComponentFixture<DihyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
