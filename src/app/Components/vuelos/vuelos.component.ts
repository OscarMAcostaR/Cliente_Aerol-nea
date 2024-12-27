import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosService} from '../../Services/vuelos.service';
@Component({
  selector: 'app-vuelos',
  imports: [CommonModule],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.css'
})
export class VuelosComponent {
  constructor(private VuelosService: VuelosService){
    this.VuelosService.getVuelos();
  }//End constructor


  get vueloList(){
    return this.VuelosService.vuelosList;
  }

  deleteVuelo(id: any){
    this.VuelosService.deleteVuelo(id);
  }



}//End component class