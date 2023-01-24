import { setup, template } from "../about";
import { faker } from "@faker-js/faker";

const mockRequest = () => {
  const username = faker.name.firstName();
  const id = faker.phone.number() + "@c.us";
  const text = faker.lorem.paragraph();
  const timestamp = faker.date.past();
  const attachedLinks = [faker.internet.url()];
  const attachedMention = [faker.name.firstName()];
  const msgType = faker.helpers
    .arrayElements(
      ["git", "text", "image", "video", "audio", "sticker", "document"],
      1
    )[0]
    .toLowerCase();
  const chatType = faker.helpers
    .arrayElements(["group", "private", "unknown"], 1)[0]
    .toLowerCase();
  const isMedia = faker.datatype.boolean();
  const isQuotedMsg = faker.datatype.boolean();

  return {
    username,
    id,
    text,
    timestamp,
    attachments: {
      attachedLinks,
      attachedMention,
    },
    metadata: {
      chatType,
      msgType,
      isMedia,
      isQuotedMsg,
    },
  };
};

describe("Test about component", () => {
  it("Ensure required fields", () => {
    const fields = ["name", "alias", "version", "description", "author"];

    fields.forEach((field) => {
      expect(setup).toHaveProperty(field);
    });
  });

  it("Ensure template", () => {
    expect(template).toBeInstanceOf(Function);
  });

  // TODO: Ensure template return error when request is not valid
  it("...", () => {
    const request = mockRequest();
    const response = template(request);
  });
});
