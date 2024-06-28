import { Instance } from "../../models/instance";

export type ListInstancesResponse = { instance: Instance }[];

export type CreateInstanceParams = {
  instanceName: string;
  apikey?: string;
  number?: string;
};

export type CreateInstanceResponse = {
  instance: {
    instanceName: string;
    status: string;
  };
  hash: { apikey: string };
  qrcode: {
    code: string;
    base64: string;
  };
};

export type InfoInstanceResponse = {
  instance: string;
  connectionStatus: { state: string; statusReason: number };
  instanceInfo: {
    instance: Instance;
  };
  qrcode: string | null;
};

export type WebhookStatusResponse = {
  _id: string;
  url: string;
  enabled: boolean;
  local_map: boolean;
  STATUS_INSTANCE: boolean;
  QRCODE_UPDATED: boolean;
  MESSAGES_UPDATE: boolean;
  MESSAGES_UPSERT: boolean;
  SEND_MESSAGE: boolean;
  GROUPS_UPSERT: boolean;
  GROUPS_UPDATE: boolean;
  GROUP_PARTICIPANTS_UPDATE: boolean;
  CONNECTION_UPDATE: boolean;
  MESSAGES_SET: boolean;
  CONTACTS_SET: boolean;
  CONTACTS_UPSERT: boolean;
  CONTACTS_UPDATE: boolean;
  PRESENCE_UPDATE: boolean;
  CHATS_SET: boolean;
  CHATS_UPSERT: boolean;
  CHATS_UPDATE: boolean;
  CHATS_DELETE: boolean;
  groups_ignore: boolean;
  __v: number;
};

export type WebhookDefineParams = {
  url: string;
  enabled: boolean;
  local_map?: boolean;
  STATUS_INSTANCE?: boolean;
  QRCODE_UPDATED?: boolean;
  MESSAGES_UPDATE?: boolean;
  MESSAGES_UPSERT?: boolean;
  SEND_MESSAGE?: boolean;
  GROUPS_UPSERT?: boolean;
  GROUPS_UPDATE?: boolean;
  GROUP_PARTICIPANTS_UPDATE?: boolean;
  CONNECTION_UPDATE?: boolean;
  MESSAGES_SET?: boolean;
  CONTACTS_SET?: boolean;
  CONTACTS_UPSERT?: boolean;
  CONTACTS_UPDATE?: boolean;
  PRESENCE_UPDATE?: boolean;
  CHATS_SET?: boolean;
  CHATS_UPSERT?: boolean;
  CHATS_UPDATE?: boolean;
  CHATS_DELETE?: boolean;
  groups_ignore?: boolean;
};
