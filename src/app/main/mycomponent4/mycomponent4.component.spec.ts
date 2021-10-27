import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponent4Component } from './mycomponent4.component';

describe('Mycomponent4Component', () => {
  let component: Mycomponent4Component;
  let fixture: ComponentFixture<Mycomponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycomponent4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
