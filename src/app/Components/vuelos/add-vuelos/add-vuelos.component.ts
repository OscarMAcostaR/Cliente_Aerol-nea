import { Component, ElementRef, ViewChild } from '@angular/core';
import { VuelosService } from '../../../Services/vuelos.service';
import Swal from 'sweetalert2';
import { AeropuertoService } from '../../../Services/aeropuerto.service';

@Component({
  selector: 'app-add-vuelos',
  templateUrl: './add-vuelos.component.html',
  styleUrls: ['./add-vuelos.component.css'],
})
export class AddVuelosComponent {
  public aeropuertos: any[] = [];
  @ViewChild('codigo_vuelo') private codigo_vuelo!: ElementRef;
  @ViewChild('horas_vuelo') private horas_vuelo!: ElementRef;
  @ViewChild('fecha_hora') private fecha_hora!: ElementRef;
  @ViewChild('estatus') private estatus!: ElementRef;
  @ViewChild('id_origen') private id_origen!: ElementRef;
  @ViewChild('id_destino ') private id_destino!: ElementRef;
  @ViewChild('estado ') private estado!: ElementRef;

  constructor(
    private vuelosService: VuelosService,
    private aeropuertoService: AeropuertoService
  ) {}


  save() {
    // Obtener los valores de los campos
    const codigoVuelo = this.codigo_vuelo.nativeElement.value;
    const horasVuelo = this.horas_vuelo.nativeElement.value;
    const fechaHora = this.fecha_hora.nativeElement.value;
    const estatus = this.estatus.nativeElement.value;
    const id_origen = this.id_origen.nativeElement.value;
    const id_destino = this.id_destino.nativeElement.value;

    let validation = true;

    // Validaciones
    if (!codigoVuelo || codigoVuelo.trim() === '') {
      Swal.fire('Error', 'El campo "Código de Vuelo" es obligatorio.', 'error');
      validation = false;
    } else if (!horasVuelo || isNaN(horasVuelo)) {
      Swal.fire(
        'Error',
        'El campo "Horas de Vuelo" debe ser un número válido.',
        'error'
      );
      validation = false;
    } else if (!fechaHora || fechaHora.trim() === '') {
      Swal.fire(
        'Error',
        'El campo "Fecha y Hora" es obligatorio.',
        'error'
      );
      validation = false;
    } else if (!estatus || estatus.trim() === '') {
      Swal.fire('Error', 'El campo "Estatus" es obligatorio.', 'error');
      validation = false;
    }

    // Si todas las validaciones pasan, envía los datos
    if (validation) {
      this.vuelosService.addVuelo(
        codigoVuelo,
        fechaHora,
        parseFloat(horasVuelo),
        estatus,
        id_origen,
        id_destino,
     
      );
    }
  }
}
