import { MetadataProtocol } from "../interfaces/metadata_protocol";
import { GROUP_LINK } from "./allowed_links";

function template(msg: any): void {
  const text = msg.body as string;
  const allowed_links: string[] = Object.values(GROUP_LINK);

  !allowed_links.some((l) => text.includes(l)) &&
    msg.reply("link não permitido");
}

export const forbidden_link: MetadataProtocol = {
  alias: /chat\.whatsapp\.com/,
  trigger: "message_create",
  template: template,
};
