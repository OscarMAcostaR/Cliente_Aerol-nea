import { Component, ElementRef, ViewChild } from '@angular/core';
import { AeropuertoService } from '../../../Services/aeropuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-aeropuerto',
  imports: [],
  templateUrl: './add-aeropuerto.component.html',
  styleUrl: './add-aeropuerto.component.css'
})
export class AddAeropuertoComponent {

  //selectFile: File | null = null;

  @ViewChild('nombre_aeropuerto') private nombre_aeropuerto!: ElementRef;
  @ViewChild('municipio') private municipio!: ElementRef;
  @ViewChild('estado') private estado!: ElementRef;
  @ViewChild('pais') private pais!: ElementRef;

  constructor(private service: AeropuertoService){}

  /*onFileSelected(event: any){
    this.selectFile = event.target.files[0];
  }*/
  
    

  save(){
    /*if(this.selectFile){

      const formData = new FormData();

      formData.append('image', this.selectFile);

      this.service.uploadImage(formData).subscribe((response: any)=>{
        
      });

    }else{

      //Sweet Alert
      Swal.fire('Error', 'No se ha seleccionado ninguna imagen', 'error');
    }*/
      const nombre_aeropuerto =  this.nombre_aeropuerto.nativeElement.value;
      const municipio =  this.municipio.nativeElement.value;
      const estado =  this.estado.nativeElement.value;
      const pais =  this.pais.nativeElement.value;

      let validation = true;

      if(nombre_aeropuerto == null || nombre_aeropuerto == undefined || nombre_aeropuerto == "" ){
        Swal.fire('Error', 'El campo aeropuerto debe ser ingresado', 'error');
        validation = false;
      }else if(municipio == null || municipio == undefined || municipio == ""){
        Swal.fire('Error', 'El campo municipio debe ser ingresado', 'error');
        validation = false;
      }else if(estado == null || estado == undefined || estado == ""){
        Swal.fire('Error', 'El campo estado debe ser ingresado', 'error');
        validation = false;
      }else if(pais == null || pais == undefined || pais == ""){
        Swal.fire('Error', 'El campo país debe ser ingresado', 'error');
        validation = false;
      }

      
    
      if(validation){

        this.service.addAeropuerto(
          nombre_aeropuerto,
          municipio,
          estado,
          pais
        );

      }


  }//End save function


}//End class
