import {Injectable} from "@angular/core";
import {MessageType} from "./domain/message/message-type.enum";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  _battleMessages: Map<MessageType, string>;
  battleMessages: Subject<Map<MessageType, string>>;


  constructor() {
    this._battleMessages = new Map<MessageType, string>();
    this.battleMessages = new Subject<Map<MessageType, string>>();
  }

  addBattleMessage(type: MessageType) {
    this._battleMessages.set(type, 'test - message');
    this.battleMessages.next({...this._battleMessages});
  }

  clearBattleMessages() {
    this._battleMessages.clear();
  }
}
