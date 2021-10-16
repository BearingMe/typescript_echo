import { MetadataProtocol } from "../interfaces/metadata_protocol";

async function template(msg: any) {
  console.log("work");

  const chat = await msg.getChat();
  const mentions = await msg.getMentions();

  mentions.forEach(async (elem: any) => {
    await chat.removeParticipants([elem.id._serialized]);
    await new Promise((r) => setTimeout(r, 500));
  });
}

export const remove: MetadataProtocol = {
  alias: /^!remove/,
  trigger: "message",
  role: "staff_only",
  template: template,
};
