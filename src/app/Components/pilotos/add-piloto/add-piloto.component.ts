import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { PilotosService } from '../../../Services/pilotos.service';
import { normalize } from 'path';

@Component({
  selector: 'app-add-piloto',
  imports: [],
  templateUrl: './add-piloto.component.html',
  styleUrl: './add-piloto.component.css'
})
export class AddPilotoComponent {

  
    @ViewChild('codigo_piloto') private codigo_piloto!: ElementRef;
    @ViewChild('nombre_completo') private nombre_completo!: ElementRef;
    @ViewChild('sexo') private sexo!: ElementRef;
    @ViewChild('horas_de_vuelo') private horas_de_vuelo!: ElementRef;

      constructor(private service: PilotosService){}

      save(){
      

            const nombre_completo =  this.nombre_completo.nativeElement.value;
            const sexo =  this.sexo.nativeElement.value;
            const horas_de_vuelo =  this.horas_de_vuelo.nativeElement.value;
      
            let validation = true;
      
            
            if(nombre_completo == null || nombre_completo== undefined || nombre_completo == ""){
              Swal.fire('Error', 'El campo nombre debe ser ingresado', 'error');
              validation = false;
            }else if(sexo== null || sexo == undefined || sexo == ""){
              Swal.fire('Error', 'El campo sexo debe ser ingresado', 'error');
              validation = false;
            }else if(horas_de_vuelo== null || horas_de_vuelo== undefined || horas_de_vuelo== ""){
              Swal.fire('Error', 'El campo horas de vuelo debe ser ingresado', 'error');
              validation = false;
            }
      
                     
            if(validation){
      
              this.service.addPiloto(
                nombre_completo,
                sexo,
                horas_de_vuelo
              );
      
            }
      
        }//End save function
}
