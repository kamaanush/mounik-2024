import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersComponent } from './mobiles';

describe('ComputersComponent', () => {
  let component: ComputersComponent;
  let fixture: ComponentFixture<ComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
