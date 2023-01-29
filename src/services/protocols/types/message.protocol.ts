export type MessageType = {
  attachments: {
    links?: string[];
    mentions?: string[];
    quoted?: MessageType;
  };

  body: {
    text?: string;
    payload?: any; // TODO: future implementation
  };

  info: {
    user_id: string;
    chat_id: string;
    source_type: "group" | "private" | "status";
    content_type: "text" | "media" | "sticker"; // TODO: working in progress
    timestamp: Date;
  };
};
