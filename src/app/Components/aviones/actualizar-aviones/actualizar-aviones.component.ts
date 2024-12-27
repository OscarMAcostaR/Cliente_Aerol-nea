import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { AvionesService } from '../../../Services/aviones.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-aviones',
  imports: [],
  templateUrl: './actualizar-aviones.component.html',
  styleUrl: './actualizar-aviones.component.css',
})
export class ActualizarAvionesComponent {
  private id_param: any;
  public id_avion: number = 0;

  @ViewChild('codigo_avion') private codigo_avion!: ElementRef;
  @ViewChild('tipo_avion') private tipo_avion!: ElementRef;
  @ViewChild('horas_de_vuelo') private horas_de_vuelo!: ElementRef;
  @ViewChild('capacidad_pasajeros') private capacidad_pasajeros!: ElementRef;

  constructor(private service: AvionesService, private router: ActivatedRoute) {
    this.id_param = this.router.params.subscribe((params) => {
      console.log('ID Recuperado: ' + params['id']);
      this.id_avion = params['id'];
      this.service.GetAvion(this.id_avion);
      this.codigo_avion = params['codigo_avion'];
    })
  }

  get Avion() {
    return this.service.avion;
  }

  Save() {
    const codigo_avion = this.codigo_avion.nativeElement.value;
    const tipo_avion = this.tipo_avion.nativeElement.value;
    const horas_de_vuelo = this.horas_de_vuelo.nativeElement.value;
    const capacidad_pasajeros = this.capacidad_pasajeros.nativeElement.value;

    if (
      (codigo_avion != null || codigo_avion != undefined) &&
      (tipo_avion != null || tipo_avion != undefined) &&
      (horas_de_vuelo != null || horas_de_vuelo != undefined) &&
      (capacidad_pasajeros != null || capacidad_pasajeros != undefined)
    ) {
      this.service.UpdateAvion(
        this.id_avion,
        codigo_avion,
        tipo_avion,
        horas_de_vuelo,
        capacidad_pasajeros
      );
    } else {
      Swal.fire('Error', 'Todos los campos deben ser agregados...', 'error');
    }
  } // End save function
}