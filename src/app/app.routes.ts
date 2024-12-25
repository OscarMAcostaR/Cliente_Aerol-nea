import { Routes } from '@angular/router';
import { AeropuertoComponent } from './Components/aeropuerto/aeropuerto.component';
import { AddAeropuertoComponent } from './Components/aeropuerto/add-aeropuerto/add-aeropuerto.component';
import { ActualizarAeropuertoComponent } from './Components/aeropuerto/actualizar-aeropuerto/actualizar-aeropuerto.component';

export const routes: Routes = [
    {path: '', component: AeropuertoComponent},

    {path: 'listaraeropuertos', component: AeropuertoComponent},
    
    {path: 'addaeropuerto', component: AddAeropuertoComponent},
    
    {path: 'updateaeropuerto/:id', component: ActualizarAeropuertoComponent},

    
];
