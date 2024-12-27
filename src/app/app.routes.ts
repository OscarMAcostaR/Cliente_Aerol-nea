import { Routes } from '@angular/router';
import { AeropuertoComponent } from './Components/aeropuerto/aeropuerto.component';
import { AddAeropuertoComponent } from './Components/aeropuerto/add-aeropuerto/add-aeropuerto.component';
import { ActualizarAeropuertoComponent } from './Components/aeropuerto/actualizar-aeropuerto/actualizar-aeropuerto.component';
import { PilotosComponent } from './Components/pilotos/pilotos.component';
import { AddPilotoComponent } from './Components/pilotos/add-piloto/add-piloto.component';
import { ActualizarPilotoComponent } from './Components/pilotos/actualizar-piloto/actualizar-piloto.component';
import { VuelosComponent } from './Components/vuelos/vuelos.component';
import { AddVuelosComponent } from './Components/vuelos/add-vuelos/add-vuelos.component';
import { ActualizarVuelosComponent } from './Components/vuelos/actualizar-vuelos/actualizar-vuelos.component';
import { AvionesComponent } from './Components/aviones/aviones.component';
import { ActualizarAvionesComponent } from './Components/aviones/actualizar-aviones/actualizar-aviones.component';
import { AddAvionesComponent } from './Components/aviones/add-aviones/add-aviones.component';

export const routes: Routes = [
    { path: '', component: AvionesComponent },

    { path: 'listaraeropuertos', component: AeropuertoComponent },
    { path: 'addaeropuerto', component: AddAeropuertoComponent },
    { path: 'updateaeropuerto/:id', component: ActualizarAeropuertoComponent },

    { path: 'listarpilotos', component: PilotosComponent },
    { path: 'addpiloto', component: AddPilotoComponent },
    { path: 'updatepiloto/:id', component: ActualizarPilotoComponent },

    { path: 'listarvuelos', component: VuelosComponent },
    { path: 'addvuelo', component: AddVuelosComponent },
    { path: 'updatevuelo/:id', component: ActualizarVuelosComponent },

    { path: 'listaraviones', component: AvionesComponent },
    { path: 'insertAvion', component: AddAvionesComponent },
    { path: 'updateAvion/:id', component: ActualizarAvionesComponent }
];
