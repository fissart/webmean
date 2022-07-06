import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1RHComponent } from './componente1-rh.component';

describe('Componente1RHComponent', () => {
  let component: Componente1RHComponent;
  let fixture: ComponentFixture<Componente1RHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1RHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente1RHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
