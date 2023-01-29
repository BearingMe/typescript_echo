import type { Request } from "./protocols/interfaces/request.protocol";

export const setup = {
  name: "about",
  alias: /^!about$/,
  version: "0.1.0",
  description: "About this bot",
  long_description: "",
  author: "Smith",
};

export const template = (request: Request) => {};
