export class Matcher {
  private _msg: any;
  private _text: string;

  constructor(msg: any) {
    this._msg = msg; 
    this._text = msg.body as string;
  }

  alias(aliasPattern: RegExp): boolean {
    if (this._text.match(aliasPattern)) return true;

    return false;
  }
}
