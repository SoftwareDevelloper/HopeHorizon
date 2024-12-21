import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsportGamesComponent } from './viewsport-games.component';

describe('ViewsportGamesComponent', () => {
  let component: ViewsportGamesComponent;
  let fixture: ComponentFixture<ViewsportGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsportGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsportGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
