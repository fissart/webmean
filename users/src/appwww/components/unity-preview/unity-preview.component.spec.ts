import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityPreviewComponent } from './unity-preview.component';

describe('UnityPreviewComponent', () => {
  let component: UnityPreviewComponent;
  let fixture: ComponentFixture<UnityPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
