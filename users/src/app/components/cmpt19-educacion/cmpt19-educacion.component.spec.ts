import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt19EDUCACIONComponent } from './cmpt19-educacion.component';

describe('Cmpt19EDUCACIONComponent', () => {
  let component: Cmpt19EDUCACIONComponent;
  let fixture: ComponentFixture<Cmpt19EDUCACIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt19EDUCACIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt19EDUCACIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
