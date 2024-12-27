import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPilotoComponent } from './actualizar-piloto.component';

describe('ActualizarPilotoComponent', () => {
  let component: ActualizarPilotoComponent;
  let fixture: ComponentFixture<ActualizarPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPilotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
