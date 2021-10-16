import { MetadataProtocol } from "../interfaces/metadata_protocol";

function template(msg: any): void {
  let number = Math.round(Math.random() * 1)
  let choice = ['cara', 'coroa'][number]

  msg.reply(choice);
}

export const flip: MetadataProtocol = {
  alias: /^!flip$/,
  trigger: "message",
  template: template,
};
