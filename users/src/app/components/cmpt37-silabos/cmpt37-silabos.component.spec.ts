import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt37SILABOSComponent } from './cmpt37-silabos.component';

describe('Cmpt37SILABOSComponent', () => {
  let component: Cmpt37SILABOSComponent;
  let fixture: ComponentFixture<Cmpt37SILABOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt37SILABOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt37SILABOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
