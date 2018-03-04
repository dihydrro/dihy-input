import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputTokenComponent } from './dihy-input-token.component';

describe('DihyInputTokenComponent', () => {
  let component: DihyInputTokenComponent;
  let fixture: ComponentFixture<DihyInputTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
