import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvionesComponent } from './add-aviones.component';

describe('AddAvionesComponent', () => {
  let component: AddAvionesComponent;
  let fixture: ComponentFixture<AddAvionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAvionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
