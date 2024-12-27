import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  public vuelosList: any[] = [];
  public vuelo: any;

  private apiUrl = 'http://localhost:5004/api/Vuelos'; // Base URL para los endpoints

  constructor(private http: HttpClient) {}

  // Obtener todos los vuelos
  getVuelos(): void {
    this.http.get(`${this.apiUrl}/getVuelos`).subscribe(
      (data: any) => {
        console.log(data);
        this.vuelosList = data.map((vuelo: any) => ({
          codigo_vuelo: vuelo.codigo_vuelo,
          fecha_hora: vuelo.fecha_hora,
          estatus: vuelo.estatus,
          horas_vuelo: vuelo.horas_vuelo,
          id_vuelo: vuelo.id_vuelo,
        }));
      },
      (error) => {
        console.error('Error al obtener vuelos:', error);
      }
    );
  }

  // Obtener un vuelo específico por ID
  getVuelo(id: number): void {
    this.http
      .get('http://localhost:5004/api/Vuelos/GetVuelo?id=' + id)
      .subscribe(
        (data: any) => {
          console.log('Datos del vuelo:', data);
          this.vuelo = {
            codigo_vuelo: data.codigo_vuelo,
            fecha_hora: data.fecha_hora,
            estatus: data.estatus,
            horas_vuelo: data.horas_vuelo,
          };
        },
        (error) => {
          console.error('Error al obtener vuelo:', error);
        }
      );
  }

  // Agregar un nuevo vuelo
  addVuelo(
    codigo_vuelo: string,
    fecha_hora: string,
    horas_vuelo: number,
    estatus: string,
    id_origen: number,
    id_destino: number
  ): void {
    this.http
      .post(`${this.apiUrl}/insertVuelo`, {
        codigo_vuelo,
        fecha_hora,
        horas_vuelo,
        estatus,
        id_origen,
        id_destino,
      })
      .subscribe(
        (response: any) => {
          Swal.fire(
            'Vuelo creado',
            'El vuelo se creó correctamente.',
            'success'
          ).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          Swal.fire('Error', 'No se pudo agregar el vuelo.', 'error');
          console.error('Error al agregar vuelo:', error);
        }
      );
  }

  // Actualizar un vuelo
  updateVuelo(
    id_vuelo: number,
    codigo_vuelo: string,
    fecha_hora: string,
    estatus: string,
    horas_vuelo: number,
   
  ): void {
    this.http
      .put('http://localhost:5004/api/Vuelos/updateVuelo', {
        id_vuelo,
        codigo_vuelo,
        fecha_hora,
        estatus,
        horas_vuelo,
      })
      .subscribe(
        (response: any) => {
          Swal.fire(
            'Éxito',
            'El vuelo ha sido actualizado correctamente.',
            'success'
          ).then(() => {
            window.location.href = '/listarvuelos';
          });
        },
        (error) => {
          Swal.fire(
            'Error',
            'Hubo un problema al actualizar el vuelo.',
            'error'
          );
          console.error(error);
        }
      );
  }
  // Eliminar un vuelo
  deleteVuelo(id_vuelo: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/deleteVuelo?id=${id_vuelo}`).subscribe(
          (response: any) => {
            if (response.respuesta?.toUpperCase().includes('ERROR')) {
              Swal.fire('Error', response.respuesta, 'error');
            } else {
              Swal.fire(
                'Eliminado',
                'El vuelo se eliminó correctamente.',
                'success'
              ).then(() => {
                window.location.reload();
              });
            }
          },
          (error) => {
            console.error('Error al eliminar vuelo:', error);
            Swal.fire('Error', 'No se pudo eliminar el vuelo.', 'error');
          }
        );
      }
    });
  }
}
