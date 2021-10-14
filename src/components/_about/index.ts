import { MetadataProtocol } from "../interfaces/metadata_protocol";
import { openTXT } from "../utils/file";

const aboutText: string = openTXT(__dirname, "about.txt");

function template(msg: any): void {
  msg.reply(aboutText);
}

export const about: MetadataProtocol = {
  alias: /^!about$/,
  trigger: "message_create",
  template: template,
};
