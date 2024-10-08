import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';

const routes: Routes = [
	{	path: 'home', component: HomeComponent	},
	{	path: 'lista', component: PeopleListComponent	},
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{	path: '**', component: HomeComponent	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
