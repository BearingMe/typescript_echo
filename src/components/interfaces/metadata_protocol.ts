type TriggerTypes = "message" | "message_create"
type ScopeTypes = "anywhere" | "group_only" | "private_only"

export interface MetadataProtocol {
  alias: RegExp;
  trigger: TriggerTypes;
  scope?: ScopeTypes,
  template(msg: any): void
}