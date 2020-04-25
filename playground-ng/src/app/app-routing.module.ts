import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexgridComponent } from './flexgrid/flexgrid.component';

const routes: Routes = [{ path: 'flexgrid', component: FlexgridComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
