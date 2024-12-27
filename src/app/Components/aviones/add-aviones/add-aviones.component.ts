import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionesService } from '../../../Services/aviones.service';
import Swal from 'sweetalert2';
import { normalize } from 'path';

@Component({
  selector: 'app-add-aviones',
  imports: [],
  templateUrl: './add-aviones.component.html',
  styleUrl: './add-aviones.component.css',
})
export class AddAvionesComponent {
  @ViewChild('codigo_avion') private codigo_avion!: ElementRef;
  @ViewChild('tipo_avion') private tipo_avion!: ElementRef;
  @ViewChild('horas_de_vuelo') private horas_de_vuelo!: ElementRef;
  @ViewChild('capacidad_pasajeros') private capacidad_pasajeros!: ElementRef;

  constructor(private service: AvionesService) {}

  Save() {
    const codigo_avion = this.codigo_avion.nativeElement.value;
    const tipo_avion = this.tipo_avion.nativeElement.value;
    const horas_de_vuelo = this.horas_de_vuelo.nativeElement.value;
    const capacidad_pasajeros = this.capacidad_pasajeros.nativeElement.value;

    let validation = true;

    if (
      codigo_avion == null ||
      codigo_avion == undefined ||
      codigo_avion == ''
    ) {
      Swal.fire('Error', 'El campo código avión debe ser ingresado', 'error');
      validation = false;
    } else if (
      tipo_avion == null ||
      tipo_avion == undefined ||
      tipo_avion == ''
    ) {
      Swal.fire('Error', 'El campo tipo avión debe ser ingresado', 'error');
      validation = false;
    } else if (
      horas_de_vuelo == null ||
      horas_de_vuelo == undefined ||
      horas_de_vuelo == ''
    ) {
      Swal.fire('Error', 'El campo horas de vuelo debe ser ingresado', 'error');
      validation = false;
    } else if (
      capacidad_pasajeros == null ||
      capacidad_pasajeros == undefined ||
      capacidad_pasajeros == ''
    ) {
      Swal.fire(
        'Error',
        'El campo capacidad pasajeros debe ser ingresado',
        'error'
      );
      validation = false;
    }

    if (validation) {
      this.service.AddAvion(
        codigo_avion,
        tipo_avion,
        horas_de_vuelo,
        capacidad_pasajeros
      );
    }
  }

  // constructor(private avionesService: AvionesService) {
  //   this.avionesService.GetAviones();
  // }
}