import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ClientAreaComponent } from './pages/client-area/client-area.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "abrir-conta", component: CreateAccountComponent},
  { path: "area-cliente", component: ClientAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
