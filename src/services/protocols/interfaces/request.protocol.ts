import { MessageType } from "../types/message.protocol";

export interface Request {
  get attachments(): Promise<MessageType["attachments"]>;

  get body(): Promise<MessageType["body"]>;

  get info(): Promise<MessageType["info"]>;
}
