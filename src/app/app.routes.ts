import { Routes } from '@angular/router';
import { AeropuertoComponent } from './Components/aeropuerto/aeropuerto.component';
import { AddAeropuertoComponent } from './Components/aeropuerto/add-aeropuerto/add-aeropuerto.component';
import { ActualizarAeropuertoComponent } from './Components/aeropuerto/actualizar-aeropuerto/actualizar-aeropuerto.component';
import { PilotosComponent } from './Components/pilotos/pilotos.component';
import { AddPilotoComponent } from './Components/pilotos/add-piloto/add-piloto.component';
import { ActualizarPilotoComponent } from './Components/pilotos/actualizar-piloto/actualizar-piloto.component';

export const routes: Routes = [
    {path: '', component: AeropuertoComponent},

    {path: 'listaraeropuertos', component: AeropuertoComponent},
    
    {path: 'addaeropuerto', component: AddAeropuertoComponent},
    
    {path: 'updateaeropuerto/:id', component: ActualizarAeropuertoComponent},

    {path: 'listarpilotos', component: PilotosComponent},

    {path:'addpiloto', component:AddPilotoComponent},

    {path:'updatePiloto/:id', component: ActualizarPilotoComponent},

    
];
