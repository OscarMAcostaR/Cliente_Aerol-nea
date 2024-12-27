import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { normalize } from 'path';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class PilotosService {
  public pilotosList: any[] =[];
  public piloto: any;

  constructor(private http:HttpClient) {
    this.pilotosList = [];
    this.piloto = null;
   }

   //OBTIENE LISTA DE PILOTOS GENERAL
   getPilotos(){
    this.http.get('http://localhost:5004/getPilotos').subscribe((data: any)=>{
      console.log(data);
      this.pilotosList = data;
    });
   }

   //OBTIENE PILOTO POR ID
   getPiloto(id:Number){
    this.http.get('http://localhost:5004/GetPiloto?id='+id).subscribe((data: any)=>{
      console.log(data);
      this.piloto = data;
    });
   }

   //SE AGREGA PILOTO
   addPiloto(

    nombre_completo: string,
    sexo: string,
    horas_de_vuelo: Number
   ){
      
            this.http.post('http://localhost:5004/insertPiloto', {
              id_piloto: 0,
              codigo_piloto: "",
              nombre_completo: nombre_completo,
              sexo: sexo,
              horas_de_vuelo: horas_de_vuelo,
            }).subscribe((data: any)=>{
              if(data.respuesta.toUpperCase().includes('ERROR')){
      
                //SweetAlert
                Swal.fire('Error', data.respuesta, 'error');
              }else{
      
                //SweetAlert
                Swal.fire('Piloto agregado correctamente', data.respuesta, 'success').then(()=>{
                  window.location.replace('/listarpilotos');
                });
      
              }
      
            });
   }

   //SE ACTUALIZA PILOTO
   updatePiloto(
    id_piloto:number,
    //codigo_piloto: string,
    nombre_completo: string,
    sexo: string,
    horas_de_vuelo: Number,
   ){
       this.http.put('http://localhost:5004/updatePiloto', {
              id_piloto: id_piloto,
             // codigo_piloto: codigo_piloto,
              nombre_completo: nombre_completo,
              sexo: sexo,
              horas_de_vuelo: horas_de_vuelo
            }).subscribe((data: any)=>{
              if(data.respuesta.toUpperCase().includes('ERROR')){
      
      
                //SweetAlert
                Swal.fire('Error', data.respuesta, 'error');
              }else{
      
                
                //SweetAlert
                Swal.fire('Piloto actualizado correctamente', data.respuesta, 'success').then(()=>{
                  window.location.replace('/listarpilotos');
                });
      
              }
      
            });
            
   }

   //SE ELIMINA PILOTO
   deletePiloto(id:any){
    const swalWithTailwindButtons = Swal.mixin({
          customClass: {
            confirmButton:
              'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
            cancelButton:
              'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
          },
          buttonsStyling: false,
        });
    
        swalWithTailwindButtons
          .fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              // Llamada a la API para eliminar el camión
              this.http
                .delete('http://localhost:5004/deletePiloto?id=' + id)
                .subscribe((response: any) => {
                  console.log(response);
                  if (response.respuesta.toUpperCase().includes('ERROR')) {
                    swalWithTailwindButtons.fire({
                      title: 'Error',
                      text: response.respuesta,
                      icon: 'error',
                    });
                  } else {
                    if (
                      response.respuesta.toUpperCase().includes('IDENTIFICADOR')
                    ) {
                      swalWithTailwindButtons.fire({
                        title: 'Ops!',
                        text: response.respuesta,
                        icon: 'info',
                      });
                    } else {
                      swalWithTailwindButtons
                        .fire({
                          title: 'Eliminado',
                          text: response.respuesta,
                          icon: 'success',
                        })
                        .then(() => {
                          window.location.reload();
                        });
                    }
                  }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithTailwindButtons.fire({
                title: 'Cancelado',
                text: 'Tu operación ha sido cancelada',
                icon: 'info',
              });
            }
          });
   }

}
