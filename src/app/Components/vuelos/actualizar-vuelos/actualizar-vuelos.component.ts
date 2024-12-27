import { Component, ElementRef, ViewChild } from '@angular/core';
import { VuelosService } from '../../../Services/vuelos.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-actualizar-vuelos',
  standalone: true, // Esto indica que es un componente independiente
  imports: [FormsModule], // Importar FormsModule aquí
  templateUrl: './actualizar-vuelos.component.html',
  styleUrls: ['./actualizar-vuelos.component.css'],
})
export class ActualizarVuelosComponent {
  // Declarar campos públicos solo si son necesarios para el HTML
  public id_vuelo: number = 0; // Necesario para el servicio y navegación
  public codigo_vuelo: string = ''; // Modificable desde el formulario

  // Campos internos que no se necesitan en el HTML
  private id_origen: number = 0;
  private id_piloto: number = 0;
  private id_avion: number = 0;
  private id_destino: number = 0;

  // Campos editables desde el formulario
  @ViewChild('fecha_hora') private fechaHora!: ElementRef;
  @ViewChild('estatus') private estatus!: ElementRef;
  @ViewChild('horas_vuelo') private horasVuelo!: ElementRef;

  constructor(private service: VuelosService, private router: ActivatedRoute) {
    // Recuperar el ID del vuelo desde la URL
    this.router.params.subscribe((params) => {
      console.log('ID Recuperado: ' + params['id']);
      this.id_vuelo = params['id'];
      this.service.getVuelo(this.id_vuelo); // Cargar datos del vuelo
    });
  }

  get vuelo() {
    return this.service.vuelo;
  }

  save() {
    console.log('Hola');
    // Obtener valores desde el formulario o mantener los originales
    const fecha_hora =
      this.fechaHora.nativeElement.value || this.service.vuelo.fecha_hora;
    const estatus =
      this.estatus.nativeElement.value || this.service.vuelo.estatus;
    const horas_vuelo = this.horasVuelo.nativeElement.value
      ? parseFloat(this.horasVuelo.nativeElement.value)
      : this.service.vuelo.horas_vuelo;

    // Validar solo los campos editables
    if (fecha_hora && estatus && horas_vuelo >= 0) {
      this.service
        .updateVuelo(
          this.id_vuelo,
          this.vuelo.codigo_vuelo,
          fecha_hora,
          estatus,
          horas_vuelo
        )
    } else {
      Swal.fire(
        'Error',
        'Todos los campos deben ser completados correctamente.',
        'error'
      );
    }
  }
}
