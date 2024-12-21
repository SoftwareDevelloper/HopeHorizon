import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcardsGamesComponent } from './viewcards-games.component';

describe('ViewcardsGamesComponent', () => {
  let component: ViewcardsGamesComponent;
  let fixture: ComponentFixture<ViewcardsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcardsGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcardsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
