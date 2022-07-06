import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt15RHComponent } from './cmpt15-rh.component';

describe('Cmpt15RHComponent', () => {
  let component: Cmpt15RHComponent;
  let fixture: ComponentFixture<Cmpt15RHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt15RHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt15RHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
