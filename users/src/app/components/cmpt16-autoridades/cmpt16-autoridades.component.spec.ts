import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt16AUTORIDADESComponent } from './cmpt16-autoridades.component';

describe('Cmpt16AUTORIDADESComponent', () => {
  let component: Cmpt16AUTORIDADESComponent;
  let fixture: ComponentFixture<Cmpt16AUTORIDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt16AUTORIDADESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt16AUTORIDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
