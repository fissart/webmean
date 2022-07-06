import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt22APEComponent } from './cmpt22-ap-e.component';

describe('Cmpt22APEComponent', () => {
  let component: Cmpt22APEComponent;
  let fixture: ComponentFixture<Cmpt22APEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt22APEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt22APEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
