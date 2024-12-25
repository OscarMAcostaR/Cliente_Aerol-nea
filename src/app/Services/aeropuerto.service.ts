import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
//import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  public aeropuertosList: any[] =[];

  public aeropuerto: any;

  constructor(private http:HttpClient) {

    this.aeropuertosList = [];
    this.aeropuerto = null;

   }//End constructor

   getAeropuertos(){
    
    this.http.get('http://localhost:5004/api/Aeropuerto/getAeropuertos').subscribe((data: any)=>{
      console.log(data);
      this.aeropuertosList = data;
    });

   }//End get aeropuertos function

   getAeropuerto(id: number){
    this.http.get('http://localhost:5004/api/Aeropuerto/GetAeropuerto?id='+id).subscribe((data: any)=>{
      console.log(data);
      this.aeropuerto = data;
    });
   }//End get aeropuerto

   uploadImage(formData: FormData): Observable<string>{
    console.log(formData);

    return this.http.post('http://localhost:5004/api/Aeropuerto/insertAeropuerto',formData).pipe(
      map((response: any)=>{
        console.log(response);
        return response.uniqueFileName;
      })
    );

   }//End upload image if exists

   addAeropuerto(
    nombre_aeropuerto: string,
    municipio: string,
    estado: string,
    pais: string
   ){
    
      this.http.post('http://localhost:5004/api/Aeropuerto/insertAeropuerto', {
        id_aeropuerto: 0,
        nombre_aeropuerto: nombre_aeropuerto ,
        municipio: municipio ,
        estado: estado ,
        pais: pais,
      }).subscribe((data: any)=>{
        if(data.respuesta.toUpperCase().includes('ERROR')){

          //SweetAlert
          Swal.fire('Error', data.respuesta, 'error');
        }else{


          //SweetAlert
          Swal.fire('Creado correctamente', data.respuesta, 'success').then(()=>{
            window.location.replace('/listaraeropuertos');
          });

        }

      });


   }//End add aeropuerto

   updateAeropuerto(
    id_aeropuerto: Number,
    nombre_aeropuerto: string,
    municipio: string,
    estado: string,
    pais: string
   ){
    
      this.http.put('http://localhost:5004/api/Aeropuerto/updateAeropuerto', {
        id_aeropuerto: id_aeropuerto,
        nombre_aeropuerto: nombre_aeropuerto ,
        municipio: municipio ,
        estado: estado ,
        pais: pais,
      }).subscribe((data: any)=>{
        if(data.respuesta.toUpperCase().includes('ERROR')){


          //SweetAlert
          Swal.fire('Error', data.respuesta, 'error');
        }else{

          
          //SweetAlert
          Swal.fire('Creado correctamente', data.respuesta, 'success').then(()=>{
            window.location.replace('/listaraeropuertos');
          });

        }

      });


   }//End update aeropuerto


   deleteAeropuerto(id: any) {
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
            .delete('http://localhost:5004/api/Aeropuerto/deleteAeropuerto?id=' + id)
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
  }//End delete aeropuerto

  }//End class
