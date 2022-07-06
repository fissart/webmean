import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt26PREComponent } from './cmpt26-pre.component';

describe('Cmpt26PREComponent', () => {
  let component: Cmpt26PREComponent;
  let fixture: ComponentFixture<Cmpt26PREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt26PREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt26PREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
