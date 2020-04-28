import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { AdminChatComponent } from './admin-chat/admin-chat.component';

const config: SocketIoConfig = { url: environment.url , options: {}};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserChatComponent,
    AdminChatComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
