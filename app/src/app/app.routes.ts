 import { Routes,  RouterModule } from '@angular/router';

 import { VotarComponent } from './pages/votar/votar.component';
 import { GraficaComponent } from './pages/grafica/grafica.component';

 const routes: Routes = [
    { path: 'votar', component: VotarComponent },
    { path: 'grafica', component: GraficaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'grafica' }
];

 export const APP_ROUTES  =  RouterModule.forRoot( routes );
