import { MetadataProtocol } from "../interfaces/metadata_protocol";
import { openTXT } from "../utils/file";

const linksText: string = openTXT(__dirname, "links.txt");

function template(msg: any): void {
  msg.reply(linksText);
}

export const links: MetadataProtocol = {
  alias: /^!links$/,
  trigger: "message",
  template: template,
};
