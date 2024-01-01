import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatixfunComponent } from './matixfun.component';

describe('MatixfunComponent', () => {
  let component: MatixfunComponent;
  let fixture: ComponentFixture<MatixfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatixfunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatixfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
