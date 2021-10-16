import { MetadataProtocol } from "../interfaces/metadata_protocol";
import { openTXT } from "../utils/file";

const commandsText: string = openTXT(__dirname, "commands.txt");

function template(msg: any): void {
  msg.reply(commandsText);
}

export const commands: MetadataProtocol = {
  alias: /^!commands$/,
  trigger: "message",
  template: template,
};
