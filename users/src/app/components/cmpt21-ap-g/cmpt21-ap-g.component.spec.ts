import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt21APGComponent } from './cmpt21-ap-g.component';

describe('Cmpt21APGComponent', () => {
  let component: Cmpt21APGComponent;
  let fixture: ComponentFixture<Cmpt21APGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt21APGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt21APGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
