import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt29EVENTOSComponent } from './cmpt29-eventos.component';

describe('Cmpt29EVENTOSComponent', () => {
  let component: Cmpt29EVENTOSComponent;
  let fixture: ComponentFixture<Cmpt29EVENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt29EVENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt29EVENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
