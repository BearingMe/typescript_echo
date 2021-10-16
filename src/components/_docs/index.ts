import { MetadataProtocol } from "../interfaces/metadata_protocol";

function template(msg: any): void {
  msg.reply("Essa função ainda não está pronta");
}

export const docs: MetadataProtocol = {
  alias: /^!docs$/,
  trigger: "message",
  template: template,
};
