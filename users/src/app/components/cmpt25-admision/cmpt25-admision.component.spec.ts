import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt25ADMISIONComponent } from './cmpt25-admision.component';

describe('Cmpt25ADMISIONComponent', () => {
  let component: Cmpt25ADMISIONComponent;
  let fixture: ComponentFixture<Cmpt25ADMISIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt25ADMISIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt25ADMISIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
