import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt23TESISComponent } from './cmpt23-tesis.component';

describe('Cmpt23TESISComponent', () => {
  let component: Cmpt23TESISComponent;
  let fixture: ComponentFixture<Cmpt23TESISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt23TESISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt23TESISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
