import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCurseComponent } from './users-curse.component';

describe('UsersCurseComponent', () => {
  let component: UsersCurseComponent;
  let fixture: ComponentFixture<UsersCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
