import { Component, ElementRef, ViewChild } from '@angular/core';
import { AeropuertoService } from '../../../Services/aeropuerto.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-aeropuerto',
  imports: [],
  templateUrl: './actualizar-aeropuerto.component.html',
  styleUrl: './actualizar-aeropuerto.component.css'
})
export class ActualizarAeropuertoComponent {

  private id_param: any;
  public IdAeropuerto: number = 0;

  @ViewChild('nombre_aeropuerto') private nombre_aeropuerto!: ElementRef;
  @ViewChild('municipio') private municipio!: ElementRef;
  @ViewChild('estado') private estado!: ElementRef;
  @ViewChild('pais') private pais!: ElementRef;

  constructor(private service: AeropuertoService, private router: ActivatedRoute){

    this.id_param = this.router.params.subscribe((params)=>{
      console.log('ID Recuperado: '+params['id']);
      this.IdAeropuerto = params['id'];
      this.service.getAeropuerto(this.IdAeropuerto);
    })
  }

  get aeropuerto(){

    return this.service.aeropuerto;

  }

   save(){

        const nombre_aeropuerto =  this.nombre_aeropuerto.nativeElement.value;
        const municipio =  this.municipio.nativeElement.value;
        const estado =  this.estado.nativeElement.value;
        const pais =  this.pais.nativeElement.value;
  
        if((nombre_aeropuerto.value != null || nombre_aeropuerto.value != "") && (municipio.value != null || municipio.value != "") && (estado.value != null || estado.value != "") && (pais.value != null || pais.value != "")){
  
          this.service.updateAeropuerto(
            this.IdAeropuerto,
            nombre_aeropuerto,
            municipio,
            estado,
            pais
          );
  
        }else{
          Swal.fire('Error', 'Todos los campos deben ser agregados', 'error');
        }
  
  
    }//End save function





}//End 
