import { MetadataProtocol } from "../interfaces/metadata_protocol";

function template(msg: any): void {
  let number = Math.round(Math.random() * 2);
  let choice = ["pedra", "papel", "tesoura"][number];

  msg.reply(choice);
}

export const jokenpo: MetadataProtocol = {
  alias: /^!jokenpo$/,
  trigger: "message",
  template: template,
};
