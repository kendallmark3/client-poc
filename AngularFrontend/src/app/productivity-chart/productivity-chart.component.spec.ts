import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityChartComponent } from './productivity-chart.component';

describe('ProductivityChartComponent', () => {
  let component: ProductivityChartComponent;
  let fixture: ComponentFixture<ProductivityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivityChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
