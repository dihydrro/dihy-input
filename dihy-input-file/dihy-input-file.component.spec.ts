import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihyInputFileComponent } from './dihy-input-file.component';

describe('DihyInputFileComponent', () => {
  let component: DihyInputFileComponent;
  let fixture: ComponentFixture<DihyInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihyInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihyInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
