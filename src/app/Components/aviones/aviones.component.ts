import { Component } from '@angular/core';
import { AvionesService } from '../../Services/aviones.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aviones',
  imports: [CommonModule],
  templateUrl: './aviones.component.html',
  styleUrl: './aviones.component.css'
})
export class AvionesComponent {
  constructor(private avionesService:AvionesService){
    this.avionesService.GetAviones();
  } // End CONSTRUCTOR.

  get avionesList() {
    return this.avionesService.avionesList;
  }

  DeleteAvion(id: any){
    this.avionesService.DeleteAvion(id);
  }
}
