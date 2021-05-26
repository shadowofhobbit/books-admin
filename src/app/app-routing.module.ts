import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {EditProfileComponent} from "./profile/edit-profile/edit-profile.component";
import {AllBooksComponent} from "./all-books/all-books.component";
import {EditBookComponent} from "./all-books/edit-book/edit-book.component";
import {BookComponent} from "./all-books/book/book.component";

const routes: Routes = [
  {path: '', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/edit', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'books', component: AllBooksComponent},
  {path: 'books/edit', component: EditBookComponent, canActivate: [AuthGuard]},
  {path: 'books/edit/:id', component: EditBookComponent, canActivate: [AuthGuard]},
  {path: 'books/:id', component: BookComponent},
  {path: '**', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
