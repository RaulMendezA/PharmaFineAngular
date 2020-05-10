import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user-chat', component: UserChatComponent}, //versión adaptada
  {path: 'admin-chat', component: AdminChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
