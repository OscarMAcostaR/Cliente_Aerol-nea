import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarVuelosComponent } from './actualizar-vuelos.component';

describe('ActualizarVuelosComponent', () => {
  let component: ActualizarVuelosComponent;
  let fixture: ComponentFixture<ActualizarVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarVuelosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
