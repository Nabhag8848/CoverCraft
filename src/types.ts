import { EventHandler } from "@create-figma-plugin/utilities";

export interface CloseHandler extends EventHandler {
  name: "CLOSE";
  handler: () => void;
}

export interface SaveAccessToken extends EventHandler {
  name: "SAVE_ACCESS_TOKEN";
  handler: (token: string) => void;
}

export interface GetAccessToken extends EventHandler {
  name: "GET_ACCESS_TOKEN";
  handler: (storedToken: string) => void;
}

export interface ErrorHandler extends EventHandler {
  name: "ERROR";
  handler: (message: string) => void;
}

export interface InsertInBoard extends EventHandler {
  name: "INSERT_IN_BOARD";
  handler: (text: string) => void;
}