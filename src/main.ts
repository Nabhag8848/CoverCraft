import { once, showUI, on, emit } from "@create-figma-plugin/utilities";
import { CloseHandler, GetAccessToken, SaveAccessToken } from "./types";

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
  // select layer / image
  figma.on("selectionchange", function () {
    const selections = figma.currentPage.selection;

    if (!selections.length || selections.length > 1) {
      figma.ui.postMessage({ type: "no_node_intended" });
      return;
    }

    if (selections.length === 1) {
      const node = selections[0];

      node.exportAsync({ format: "SVG" }).then((encoded) => {
        const base64 = `data:image/svg+xml;base64,${figma.base64Encode(
          encoded
        )}`;
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
