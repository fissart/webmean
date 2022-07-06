import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpt30DOCUMENTOSComponent } from './cmpt30-documentos.component';

describe('Cmpt30DOCUMENTOSComponent', () => {
  let component: Cmpt30DOCUMENTOSComponent;
  let fixture: ComponentFixture<Cmpt30DOCUMENTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmpt30DOCUMENTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpt30DOCUMENTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
