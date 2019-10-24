import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "system",
    loadChildren: () => import('../app/modules/system/system.module').then(m => m.SystemModule)
  },
  {
    path: "apps",
    loadChildren: () => import('../app/modules/apps/apps.module').then(m => m.AppsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
