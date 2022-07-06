import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt33RECLAMOSComponent } from './cmpt33-reclamos.component';

describe('Cmpt33RECLAMOSComponent', () => {
  let component: Cmpt33RECLAMOSComponent;
  let fixture: ComponentFixture<Cmpt33RECLAMOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt33RECLAMOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt33RECLAMOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
