import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt36HORARYComponent } from './cmpt36-horary.component';

describe('Cmpt36HORARYComponent', () => {
  let component: Cmpt36HORARYComponent;
  let fixture: ComponentFixture<Cmpt36HORARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt36HORARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt36HORARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
