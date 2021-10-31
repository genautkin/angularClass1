import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscardComponent } from './cardscard.component';

describe('CardscardComponent', () => {
  let component: CardscardComponent;
  let fixture: ComponentFixture<CardscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
