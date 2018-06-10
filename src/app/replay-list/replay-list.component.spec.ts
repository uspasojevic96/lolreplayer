import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayListComponent } from './replay-list.component';

describe('ReplayListComponent', () => {
  let component: ReplayListComponent;
  let fixture: ComponentFixture<ReplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
