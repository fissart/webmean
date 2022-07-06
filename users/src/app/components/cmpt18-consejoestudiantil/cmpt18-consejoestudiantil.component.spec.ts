import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt18CONSEJOESTUDIANTILComponent } from './cmpt18-consejoestudiantil.component';

describe('Cmpt18CONSEJOESTUDIANTILComponent', () => {
  let component: Cmpt18CONSEJOESTUDIANTILComponent;
  let fixture: ComponentFixture<Cmpt18CONSEJOESTUDIANTILComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt18CONSEJOESTUDIANTILComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt18CONSEJOESTUDIANTILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
