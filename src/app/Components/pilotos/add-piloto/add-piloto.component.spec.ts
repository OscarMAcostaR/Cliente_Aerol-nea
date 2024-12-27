import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPilotoComponent } from './add-piloto.component';

describe('AddPilotoComponent', () => {
  let component: AddPilotoComponent;
  let fixture: ComponentFixture<AddPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPilotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
