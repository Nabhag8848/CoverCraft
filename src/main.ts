import { once, showUI, on, emit } from "@create-figma-plugin/utilities";
import {
  CloseHandler,
  ErrorHandler,
  GetAccessToken,
  SaveAccessToken,
  InsertInBoard,
} from "./types";

export default async function () {
  const token = await figma.clientStorage.getAsync("token");
  once<CloseHandler>("CLOSE", function () {
    figma.closePlugin();
    figma.notify("Your Cover image is all set 🎉");
  });
  once<ErrorHandler>("ERROR", function (message: string) {
    figma.closePlugin();
    figma.notify(message);
  });
  showUI({
    height: 500,
    width: 350,
  });
  on<SaveAccessToken>("SAVE_ACCESS_TOKEN", async function (token: string) {
    await figma.clientStorage.setAsync("token", token);
  });
  on<InsertInBoard>("INSERT_IN_BOARD", function (imageUrl: string) {
    figma.createImageAsync(imageUrl).then(async (image: Image) => {
      // Create a rectangle that's the same dimensions as the image.
      const node = figma.createRectangle();

      const { width, height } = await image.getSizeAsync();
      node.resize(width, height);

      node.fills = [
        {
          type: "IMAGE",
          imageHash: image.hash,
          scaleMode: "FILL",
        },
      ];

      emit<GetAccessToken>("GET_ACCESS_TOKEN", token);

      figma.viewport.scrollAndZoomIntoView([node]);
      figma.notify("Image was successfully inserted in board! 🎉");
    });
  });

  // select layer / image
  figma.on("selectionchange", function () {
    const selections = figma.currentPage.selection;

    if (!selections.length || selections.length > 1) {
      figma.ui.postMessage({ type: "no_node_intended" });
      return;
    }

    if (selections.length === 1) {
      const node = selections[0];

      node.exportAsync({ format: "PNG" }).then((encoded) => {
        const base64 = `data:image/png;base64,${figma.base64Encode(encoded)}`;
        const base64Decode = encoded;
        figma.ui.postMessage({
          type: "encoded_node",
          node: base64,
          decoded_node: base64Decode,
        });
      });
      return;
    }
  });
}
