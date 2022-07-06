import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt31ORGANIGRAMAComponent } from './cmpt31-organigrama.component';

describe('Cmpt31ORGANIGRAMAComponent', () => {
  let component: Cmpt31ORGANIGRAMAComponent;
  let fixture: ComponentFixture<Cmpt31ORGANIGRAMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt31ORGANIGRAMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt31ORGANIGRAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
