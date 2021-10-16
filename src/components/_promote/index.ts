import { MetadataProtocol } from "../interfaces/metadata_protocol";

async function template(msg: any) {
  console.log("work");

  const chat = await msg.getChat();
  const mentions = await msg.getMentions();

  mentions.forEach(async (elem: any) => {
    await chat.promoteParticipants([elem.id._serialized]);
    await new Promise((r) => setTimeout(r, 500));
  });
}

export const promote: MetadataProtocol = {
  alias: /^!promote/,
  trigger: "message",
  role: "staff_only",
  template: template,
};
