import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosComponent } from './pilotos.component';

describe('PilotosComponent', () => {
  let component: PilotosComponent;
  let fixture: ComponentFixture<PilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
