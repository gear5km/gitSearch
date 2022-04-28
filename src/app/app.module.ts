import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { NoUserDirective } from './no-user.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchUserComponent,
    SearchRepoComponent,
    NoUserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
