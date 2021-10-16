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

    if (pattern == "anywhere") return true;
    if (pattern == "group_only" && contact.isGroup) return true;
    if (pattern == "private_only" && contact.isUser) return true;

    return false;
  }

  async role(pattern?: string): Promise<boolean> {
    const chat = await this._msg.getChat();
    const author = this._msg.author || this._msg.from;

    pattern = pattern ?? "anyone";

    if (pattern == "anyone") return true;

    if (chat.isGroup) {
      const admins = chat.participants
        .filter((p: any) => p.isAdmin)
        .map((p: any) => p.id._serialized);

      const creator = chat.participants
        .filter((p: any) => p.isSuperAdmin)
        .map((p: any) => p.id._serialized);

      if (pattern == "creator_only" && creator.includes(author)) return true;

      if (pattern == "staff_only" && admins.includes(author)) return true;
    }

    return false;
  }
}
