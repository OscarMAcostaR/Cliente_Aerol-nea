import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeropuertoComponent } from './aeropuerto.component';

describe('AeropuertoComponent', () => {
  let component: AeropuertoComponent;
  let fixture: ComponentFixture<AeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeropuertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
