import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PilotosService } from '../../Services/pilotos.service';

@Component({
  selector: 'app-pilotos',
  imports: [CommonModule],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent {
  constructor(private pilotosService:PilotosService){
    this.pilotosService.getPilotos();
  }//End constructor

  get pilotosList(){
    return this.pilotosService.pilotosList;
  }

  deletePiloto(id: any){
    this.pilotosService.deletePiloto(id);
  }
}
