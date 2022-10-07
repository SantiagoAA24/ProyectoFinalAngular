import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// * Aquí se define las rutas o URLs que harán parte del proyecto
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
