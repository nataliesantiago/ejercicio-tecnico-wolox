import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterModule } from './pages/register/register.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'terminos-y-condiciones',
    loadChildren: () => import('./pages/terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'listado-tecnologias',
    loadChildren: () => import('./pages/list-technologies/list-technologies.module').then((m) => m.ListTechnologiesModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
