import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt39AverageComponent } from './cmpt39-average.component';

describe('Cmpt39AverageComponent', () => {
  let component: Cmpt39AverageComponent;
  let fixture: ComponentFixture<Cmpt39AverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt39AverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt39AverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
