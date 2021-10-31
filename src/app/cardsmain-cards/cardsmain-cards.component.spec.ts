import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsmainCardsComponent } from './cardsmain-cards.component';

describe('CardsmainCardsComponent', () => {
  let component: CardsmainCardsComponent;
  let fixture: ComponentFixture<CardsmainCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsmainCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsmainCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
