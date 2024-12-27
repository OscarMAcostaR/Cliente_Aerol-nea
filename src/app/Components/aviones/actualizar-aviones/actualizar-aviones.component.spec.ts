import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAvionesComponent } from './actualizar-aviones.component';

describe('ActualizarAvionesComponent', () => {
  let component: ActualizarAvionesComponent;
  let fixture: ComponentFixture<ActualizarAvionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarAvionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
