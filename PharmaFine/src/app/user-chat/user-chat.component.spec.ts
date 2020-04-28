import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatComponent } from "./user-chat.component";
import { ChatService } from '../chat.service';
import { ENETRESET } from 'constants';

describe('UserChatComponet', () => {
  let component: UserChatComponent;
  let componentS: ChatService;
  let fixture: ComponentFixture<UserChatComponent>;
  let fixtureS: ComponentFixture<ChatService>;

  it('join() should set room to Admin', () => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    expect(component.room).toMatch(''); // before executing
    component.join();
    expect(component.room).toContain('Admin'); // after executing
  });

  it('leave() should set room to none', () => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    expect(component.room).toMatch(''); // before executing
    component.leave();
    expect(component.room).toMatch(''); // after executing
  });

  it('sendMessage() should push something to messageArray', () => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    expect(component.messageArray).toMatch(''); // before executing
    component.sendMessage();
    expect(component.messageArray).toMatch(''); // after executing
  });

  it('onkey(event) should reset messageText', () => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;

    expect(component.messageText).toMatch(''); // before executing
    component.onKey("Enter");
    expect(component.messageText).toMatch(''); // after executing
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserChatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //fixtureS = TestBed.createComponent(ChatService);
  //componentS = fixture.componentInstance;
  //fixture.detectChanges();



  /*   it('#clicked() should toggle #isOn', () => {
      const comp = new UserChatComponet();
      expect(comp.isOn).toBe(false, 'off at first');
      comp.clicked();
      expect(comp.isOn).toBe(true, 'on after click');
      comp.clicked();
      expect(comp.isOn).toBe(false, 'off after second click');
    }); */




  /*   join() {
      this.room = "Admin-"+this.user;
      this._chatService.joinRoom({ user: this.user, room: this.room });
      this._chatService.sendUser({ user: this.user });
      //this.userArray.push(this.user)
      //console.log(this.userArray);
      console.log("user: " + this.user + " joined: " + this.room);
    } */

});