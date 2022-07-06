import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt14MVComponent } from './cmpt14-mv.component';

describe('Cmpt14MVComponent', () => {
  let component: Cmpt14MVComponent;
  let fixture: ComponentFixture<Cmpt14MVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt14MVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt14MVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
