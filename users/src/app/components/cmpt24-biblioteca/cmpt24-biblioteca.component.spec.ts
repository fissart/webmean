import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt24BIBLIOTECAComponent } from './cmpt24-biblioteca.component';

describe('Cmpt24BIBLIOTECAComponent', () => {
  let component: Cmpt24BIBLIOTECAComponent;
  let fixture: ComponentFixture<Cmpt24BIBLIOTECAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt24BIBLIOTECAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt24BIBLIOTECAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
