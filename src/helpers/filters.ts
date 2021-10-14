export class Matcher {
  private _msg: any;
  private _text: string;

  constructor(msg: any) {
    this._msg = msg;
    this._text = msg.body as string;
  }

  alias(pattern: RegExp): boolean {
    if (this._text.match(pattern)) return true;

    return false;
  }

  async scope(pattern?: string): Promise<boolean> {
    const chat = await this._msg.getChat();
    const contact = await chat.getContact();

    pattern = pattern ?? "anywhere";

    if (pattern == "anywhere") {
      console.log("anywhere");
      return true;
    }

    if (pattern == "group_only" && contact.isGroup) {
      console.log("group_only");
      return true;
    }

    if (pattern == "private_only" && contact.isUser) {
      console.log("private_only");
      return true;
    }

    return false;
  }
}
