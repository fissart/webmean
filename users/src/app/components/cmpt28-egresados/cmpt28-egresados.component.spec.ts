import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt28EGRESADOSComponent } from './cmpt28-egresados.component';

describe('Cmpt28EGRESADOSComponent', () => {
  let component: Cmpt28EGRESADOSComponent;
  let fixture: ComponentFixture<Cmpt28EGRESADOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt28EGRESADOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt28EGRESADOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
