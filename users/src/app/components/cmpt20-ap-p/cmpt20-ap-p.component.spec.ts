import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt20APPComponent } from './cmpt20-ap-p.component';

describe('Cmpt20APPComponent', () => {
  let component: Cmpt20APPComponent;
  let fixture: ComponentFixture<Cmpt20APPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt20APPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt20APPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
