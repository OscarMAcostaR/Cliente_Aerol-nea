import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { PilotosService } from '../../../Services/pilotos.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-piloto',
  imports: [],
  templateUrl: './actualizar-piloto.component.html',
  styleUrl: './actualizar-piloto.component.css'
})
export class ActualizarPilotoComponent {
    private id_param: any;
    public id_piloto: number = 0;
    public codigo_piloto: string ="";



    @ViewChild('nombre_completo') private nombre_completo!: ElementRef;
    @ViewChild('sexo') private sexo!: ElementRef;
    @ViewChild('horas_de_vuelo') private horas_de_vuelo!: ElementRef;
  
    constructor(private service: PilotosService, private router: ActivatedRoute){
  
      this.id_param = this.router.params.subscribe((params)=>{
        console.log('ID Recuperado: '+params['id']);
        this.id_piloto = params['id'];
        this.service.getPiloto(this.id_piloto);
        this.codigo_piloto=params['codigo_piloto'];
     
      })
    }
  
    get piloto(){
  
      return this.service.piloto;
  
    }
  
     save(){

          
      
          const nombre_completo =  this.nombre_completo.nativeElement.value;
          const sexo =  this.sexo.nativeElement.value;
          const horas_de_vuelo =  this.horas_de_vuelo.nativeElement.value;
    
          if( (nombre_completo != null || nombre_completo != undefined) && (sexo != null || sexo != undefined) && (horas_de_vuelo != null || horas_de_vuelo != undefined)){
    
            this.service.updatePiloto(
              this.id_piloto,
              //this.codigo_piloto,
              nombre_completo,
              sexo,
              horas_de_vuelo
            );
    
          }else{
            Swal.fire('Error', 'Todos los campos deben ser agregados', 'error');
          }
    
    
      }//End save function
  
  
}
