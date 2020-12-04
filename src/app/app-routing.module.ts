import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './404.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: 'pages', loadChildren: () => PagesModule },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
