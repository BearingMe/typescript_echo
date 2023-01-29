import { MessageType } from "../types/message.protocol";

export interface Response {
  redirect(component: any): void; // TODO: define component

  reply(body: MessageType["body"]): void;

  send(body: MessageType["body"], target_id: string): void;
}
