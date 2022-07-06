import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt17ADMINISTRATIVOSComponent } from './cmpt17-administrativos.component';

describe('Cmpt17ADMINISTRATIVOSComponent', () => {
  let component: Cmpt17ADMINISTRATIVOSComponent;
  let fixture: ComponentFixture<Cmpt17ADMINISTRATIVOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt17ADMINISTRATIVOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt17ADMINISTRATIVOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
