import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketIoService } from '../socket-io.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{
  userName = "User";
  msg = ""; //var a asociar con 2way bind a input
  nuevo ="";
  listaMensajes:string[] = [];
  mensajesSubscription : Subscription;

  constructor(private socketIOService: SocketIoService) { }
  ngOnDestroy():void{
    this.mensajesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.mensajesSubscription = this.socketIOService
        .getMessage()
        .subscribe ((msg:string)=>{
      this.listaMensajes.push(msg); // cada que recibe pushea msge a lista
      console.log("Estás suscrito a chat");
    })// a leer de algún input de html´s
    
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.enviarMensaje();
      //this.msg = "";
    }
  }

  enviarMensaje(){
    this.nuevo = this.userName + ": " + this.msg;
    this.socketIOService.sendMessage(this.nuevo);
  }

}

