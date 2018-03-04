import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputTextComponent } from './dihy-input-text.component';

describe('DihyInputTextComponent', () => {
  let component: DihyInputTextComponent;
  let fixture: ComponentFixture<DihyInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
