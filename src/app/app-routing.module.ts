import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  {path: 'search-user', component: SearchUserComponent},
  {path: 'search-repo', component: SearchRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
