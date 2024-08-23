export type StoredValue = string | number | boolean | Record<string, unknown>;

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };
