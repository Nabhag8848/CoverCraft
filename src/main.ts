import { once, showUI, on, emit } from "@create-figma-plugin/utilities";
import { CloseHandler, GetAccessToken, Init, SaveAccessToken } from "./types";

export default async function () {
  const token = await figma.clientStorage.getAsync("token");
  once<CloseHandler>("CLOSE", function () {
    figma.closePlugin();
  });
  showUI({
    height: 500,
    width: 350,
  });
  on<SaveAccessToken>("SAVE_ACCESS_TOKEN", async function (token: string) {
    await figma.clientStorage.setAsync("token", token);
  });
  emit<GetAccessToken>("GET_ACCESS_TOKEN", token);
}
