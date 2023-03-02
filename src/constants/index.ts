export const isDev = process.env.NODE_ENV === "development";

export enum FetchStatus {
  IDLE = "idle",
  FETCHING = "fetching",
  UPDATING = "updating",
  SUCCESS = "success",
  FAILED = "failed",
}
