import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt38NOTASComponent } from './cmpt38-notas.component';

describe('Cmpt38NOTASComponent', () => {
  let component: Cmpt38NOTASComponent;
  let fixture: ComponentFixture<Cmpt38NOTASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt38NOTASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt38NOTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
