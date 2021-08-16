class Flags {
  constructor(regex, text) {
    this.text = text;
    this.regex = regex;
  }

  _parse(regex) {
    const results = {};
    const matches = Array.from(this.text.matchAll(regex));

    matches.forEach((match) => {
      const key = match[1];
      const value = match[2] || true;

      Object.assign(results, { [key]: value });
    });

    return results;
  }

  _validate(data_, callback_) {
    const entries = Object.entries(data_);
    const validated = entries.map(callback_);

    return Object.fromEntries(validated);
  }

  blank() {
    const dataBlank = this._parse(this.regex.flag.blank);
    const callback = (elem) => ([elem[0], Boolean(elem[1])]);

    return this._validate(dataBlank, callback);
  }

  string() {
    const dataString = this._parse(this.regex.flag.string);
    const callback = (elem) => ([elem[0], String(elem[1])]);

    return this._validate(dataString, callback);
  }

  number() {
    const dataNumber = this._parse(this.regex.flag.number);
    const callback = (elem) => ([elem[0], Number(elem[1]) || 0]);

    return this._validate(dataNumber, callback);
  }

  boolean() {
    const dataBoolean = this._parse(this.regex.flag.boolean);
    const callback = (elem) => ([elem[0], elem[1] === 'true']);

    return this._validate(dataBoolean, callback);
  }

  any() {
    const blank = this.blank();
    const string = this.string();
    const number = this.number();
    const boolean = this.boolean();

    return {
      ...blank,
      ...string,
      ...number,
      ...boolean,
    };
  }
}

module.exports = {
  Flags
};
