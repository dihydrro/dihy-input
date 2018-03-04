import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputTextareaComponent } from './dihy-input-textarea.component';

describe('DihyInputTextareaComponent', () => {
  let component: DihyInputTextareaComponent;
  let fixture: ComponentFixture<DihyInputTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
