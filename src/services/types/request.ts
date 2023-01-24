export type ClientRequest = {
  username: string;
  id: string;
  text: string;
  timestamp: Date;
  attachments: {
    attachedLinks: string[];
    attachedMention: string[];
  };
  metadata: {
    chatType: string;
    msgType: string;
    isMedia: boolean;
    isQuotedMsg: boolean;
  };
};
