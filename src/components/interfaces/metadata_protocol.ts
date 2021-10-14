type TriggerTypes = "message" | "message_create"

export interface MetadataProtocol {
  alias: RegExp;
  trigger: TriggerTypes;
  template(msg: any): void
}