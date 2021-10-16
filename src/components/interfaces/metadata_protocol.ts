type TriggerTypes = "message" | "message_create";
type ScopeTypes = "anywhere" | "group_only" | "private_only";
type RoleTypes = "anyone" | "creator_only" | "staff_only";

export interface MetadataProtocol {
  alias: RegExp;
  trigger: TriggerTypes;
  scope?: ScopeTypes;
  role?: RoleTypes;
  template(msg: any): void;
}
