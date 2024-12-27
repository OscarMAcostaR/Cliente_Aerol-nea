import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AvionesService {
  public avionesList: any[] = [];
  public avion: any;

  constructor(private http: HttpClient) {
    this.avionesList = [];
    this.avion = null;
  }

  //OBTIENE LISTA DE AVIONES GENERAL
  GetAviones() {
    this.http.get('http://localhost:5004/api/Aviones/getAviones').subscribe((data: any) => {
      console.log(data);
      this.avionesList = data;
    });
  }

  //OBTIENE AVION POR ID
  GetAvion(id: Number) {
    this.http
      .get('http://localhost:5004/api/Aviones/GetAvion?id=' + id)
      .subscribe((data: any) => {
        console.log(data);
        this.avion = data;
      });
  }

  //SE AGREGA AVION
  AddAvion(
    codigo_avion: string,
    tipo_avion: string,
    horas_de_vuelo: Number,
    capacidad_pasajeros: Number
  ) {
    this.http
      // .post('http://localhost:5004/api/Aviones/insertAvion', {
      .post('http://localhost:5004/api/Aviones/insertAvion', {
        id_avion: 0,
        codigo_avion: codigo_avion,
        tipo_avion: tipo_avion,
        horas_de_vuelo: horas_de_vuelo,
        capacidad_pasajeros: capacidad_pasajeros,
      })
      .subscribe((data: any) => {
        if (data.respuesta.toUpperCase().includes('ERROR')) {
          //SweetAlert
          Swal.fire('Error', data.respuesta, 'error');
        } else {
          //SweetAlert
          Swal.fire(
            '¡Avión agregado correctamente!',
            data.respuesta,
            'success'
          ).then(() => {
            window.location.replace('/listaraviones');
          });
        }
      });
  }

  //SE ACTUALIZA AVION
  UpdateAvion(
    id_avion: number,
    //codigo_piloto: string,
    codigo_avion: string,
    tipo_avion: string,
    horas_de_vuelo: Number,
    capacidad_pasajeros: Number
  ) {
    this.http
      .put('http://localhost:5004/api/Aviones/updateAvion', {
        id_avion: id_avion,
        codigo_avion: codigo_avion,
        tipo_avion: tipo_avion,
        horas_de_vuelo: horas_de_vuelo,
        capacidad_pasajeros: capacidad_pasajeros,
      })
      .subscribe((data: any) => {
        if (data.respuesta.toUpperCase().includes('ERROR')) {
          //SweetAlert
          Swal.fire('Error', data.respuesta, 'error');
        } else {
          //SweetAlert
          Swal.fire(
            '¡Avión actualizado correctamente!',
            data.respuesta,
            'success'
          ).then(() => {
            window.location.replace('/listaraviones');
          });
        }
      });
  }

  //SE ELIMINA AVION
  DeleteAvion(id: any) {
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
          // Llamada a la API para eliminar el avión.
          this.http
            .delete('http://localhost:5004/api/Aviones/deleteAvion?id=' + id)
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
                      title: '¡Eliminado!',
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
            title: '¡Cancelado!',
            text: 'Tu operación ha sido cancelada.',
            icon: 'info',
          });
        }
      });
  }
}