import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDashboardComponent } from './barchart-dashboard.component';

describe('BarchartDashboardComponent', () => {
  let component: BarchartDashboardComponent;
  let fixture: ComponentFixture<BarchartDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
