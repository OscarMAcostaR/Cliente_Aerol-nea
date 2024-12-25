import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAeropuertoComponent } from './add-aeropuerto.component';

describe('AddAeropuertoComponent', () => {
  let component: AddAeropuertoComponent;
  let fixture: ComponentFixture<AddAeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAeropuertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
