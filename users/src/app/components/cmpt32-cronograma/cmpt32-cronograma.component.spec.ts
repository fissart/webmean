import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt32CRONOGRAMAComponent } from './cmpt32-cronograma.component';

describe('Cmpt32CRONOGRAMAComponent', () => {
  let component: Cmpt32CRONOGRAMAComponent;
  let fixture: ComponentFixture<Cmpt32CRONOGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt32CRONOGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt32CRONOGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
