import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVuelosComponent } from './add-vuelos.component';

describe('AddVuelosComponent', () => {
  let component: AddVuelosComponent;
  let fixture: ComponentFixture<AddVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVuelosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
