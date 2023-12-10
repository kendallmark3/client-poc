import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAIComponentComponent } from './open-aicomponent.component';

describe('OpenAIComponentComponent', () => {
  let component: OpenAIComponentComponent;
  let fixture: ComponentFixture<OpenAIComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAIComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
