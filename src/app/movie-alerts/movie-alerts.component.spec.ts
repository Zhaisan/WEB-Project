import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAlertsComponent } from './movie-alerts.component';

describe('MovieAlertsComponent', () => {
  let component: MovieAlertsComponent;
  let fixture: ComponentFixture<MovieAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
