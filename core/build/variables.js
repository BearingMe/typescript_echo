const flagBlank = /--(\w+)/; // passando
const flagString = /--(\w+)="([^"]*)"/; // passando
const flagNumber = /--(\w+)=([\d.]+)/; // captura até mesmo pontos unicos .
const flagBoolean = /--(\w+)=(true|false)/; // passando

function isolate(regexPattern) {
  const emptyStart = /(?<=[\n\r\s]|^)/; // espaços em branco no inicio
  const emptyEnd = /(?=[\n\r\s]|$)/; // espaços em branco no final

  return new RegExp(emptyStart.source + regexPattern.source + emptyEnd.source, 'g');
}

const REGEXP = {
  flag: {
    blank: isolate(flagBlank),
    string: isolate(flagString),
    number: isolate(flagNumber),
    boolean: isolate(flagBoolean),
  },
};

module.exports = {
  regex: REGEXP,
};
