export type MessageType = {
  attachments: {
    links?: string[];
    mentions?: string[];
    quoted?: MessageType;
  };

  body: {
    username: string;
    text?: string;
    payload?: any; // TODO: future implementation
  };

  headers: {
    id: string;
    timestamp: Date;
    source: "group" | "private" | "status";
    content: "text" | "media" | "sticker"; // TODO: working in progress
  };
};
