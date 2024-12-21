import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstrategyGamesComponent } from './viewstrategy-games.component';

describe('ViewstrategyGamesComponent', () => {
  let component: ViewstrategyGamesComponent;
  let fixture: ComponentFixture<ViewstrategyGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstrategyGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstrategyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
