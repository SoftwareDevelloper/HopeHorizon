import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActionGamesComponent } from './view-action-games.component';

describe('ViewActionGamesComponent', () => {
  let component: ViewActionGamesComponent;
  let fixture: ComponentFixture<ViewActionGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActionGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewActionGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
