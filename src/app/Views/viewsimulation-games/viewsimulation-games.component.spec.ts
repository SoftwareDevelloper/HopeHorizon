import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsimulationGamesComponent } from './viewsimulation-games.component';

describe('ViewsimulationGamesComponent', () => {
  let component: ViewsimulationGamesComponent;
  let fixture: ComponentFixture<ViewsimulationGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsimulationGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsimulationGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
