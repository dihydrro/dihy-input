import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputNumberComponent } from './dihy-input-number.component';

describe('DihyInputNumberComponent', () => {
  let component: DihyInputNumberComponent;
  let fixture: ComponentFixture<DihyInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
