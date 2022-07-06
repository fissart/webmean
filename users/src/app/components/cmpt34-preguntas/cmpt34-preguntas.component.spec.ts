import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt34PREGUNTASComponent } from './cmpt34-preguntas.component';

describe('Cmpt34PREGUNTASComponent', () => {
  let component: Cmpt34PREGUNTASComponent;
  let fixture: ComponentFixture<Cmpt34PREGUNTASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt34PREGUNTASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt34PREGUNTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
