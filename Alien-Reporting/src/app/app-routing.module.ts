import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details', component: DetailsComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
