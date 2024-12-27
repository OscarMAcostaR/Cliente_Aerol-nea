import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionesComponent } from './aviones.component';

describe('AvionesComponent', () => {
  let component: AvionesComponent;
  let fixture: ComponentFixture<AvionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
