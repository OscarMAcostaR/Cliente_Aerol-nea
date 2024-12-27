import { Component } from '@angular/core';
import { AeropuertoService } from '../../Services/aeropuerto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aeropuerto',
  imports: [CommonModule],
  templateUrl: './aeropuerto.component.html',
  styleUrl: './aeropuerto.component.css'
})
export class AeropuertoComponent {

  constructor(private aeropuertoService: AeropuertoService){
    this.aeropuertoService.getAeropuertos();
  }//End constructor

  get aeropuertosList(){
    return this.aeropuertoService.aeropuertosList;
  }

  deleteAeropuerto(id: any){
    this.aeropuertoService.deleteAeropuerto(id);
  }
}//End component class
