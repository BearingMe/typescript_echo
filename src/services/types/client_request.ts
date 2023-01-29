export type ClientRequest = {
  id: string;
  timestamp: Date;

  body: {
    username: string;
    text?: string;
    payload?: any; // TODO: future implementation
  };

  attachments: {
    links?: string[];
    mentions?: string[];
    quotedMessage?: ClientRequest;
  };

  metadata: {
    chatType: "group" | "private" | "status";
    msgType: "text" | "media" | "sticker"; // TODO: working in progress
  };
};
