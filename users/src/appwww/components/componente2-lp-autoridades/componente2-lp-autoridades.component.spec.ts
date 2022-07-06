import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2LPAUTORIDADESComponent } from './componente2-lp-autoridades.component';

describe('Componente2LPAUTORIDADESComponent', () => {
  let component: Componente2LPAUTORIDADESComponent;
  let fixture: ComponentFixture<Componente2LPAUTORIDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2LPAUTORIDADESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente2LPAUTORIDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
