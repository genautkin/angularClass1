import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelExComponent } from './ng-model-ex.component';

describe('NgModelExComponent', () => {
  let component: NgModelExComponent;
  let fixture: ComponentFixture<NgModelExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
