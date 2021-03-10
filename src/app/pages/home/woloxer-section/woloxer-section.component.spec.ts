import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoloxerSectionComponent } from './woloxer-section.component';

describe('WoloxerSectionComponent', () => {
  let component: WoloxerSectionComponent;
  let fixture: ComponentFixture<WoloxerSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoloxerSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoloxerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
