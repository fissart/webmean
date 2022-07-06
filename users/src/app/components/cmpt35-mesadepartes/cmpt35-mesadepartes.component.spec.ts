import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt35MESADEPARTESComponent } from './cmpt35-mesadepartes.component';

describe('Cmpt35MESADEPARTESComponent', () => {
  let component: Cmpt35MESADEPARTESComponent;
  let fixture: ComponentFixture<Cmpt35MESADEPARTESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt35MESADEPARTESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt35MESADEPARTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
