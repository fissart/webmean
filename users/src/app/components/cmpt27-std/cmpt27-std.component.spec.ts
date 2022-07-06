import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt27STDComponent } from './cmpt27-std.component';

describe('Cmpt27STDComponent', () => {
  let component: Cmpt27STDComponent;
  let fixture: ComponentFixture<Cmpt27STDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt27STDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt27STDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
