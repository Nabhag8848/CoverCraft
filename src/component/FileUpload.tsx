import {
  FileUploadDropzone,
  Muted,
  Stack,
  Text,
} from "@create-figma-plugin/ui";
import { Fragment, h } from "preact";
import { StateUpdater, useCallback } from "preact/hooks";
function FileUpload({
  image,
  setImage,
  setDecodedImage,
}: {
  image: string;
  setImage: StateUpdater<string>;
  setDecodedImage: StateUpdater<Uint8Array | null>;
}) {
  useCallback(
    (window.onmessage = (event) => {
      const pluginEvent = event.data.pluginMessage;
      const { type, node, decoded_node } = pluginEvent;
      switch (type) {
        case "no_node_intended": {
          setImage("");
          setDecodedImage(null);
          break;
        }
        case "encoded_node": {
          setImage(node);
          setDecodedImage(decoded_node);
          break;
        }
        default: {
          break;
        }
      }
    }),
    []
  );

  function handleSelectedFiles(files: Array<File>) {}

  return (
    <Fragment>
      {image ? (
        <img src={image} alt="Cover Image" width="318px" height="172px" />
      ) : (
        <FileUploadDropzone onSelectedFiles={handleSelectedFiles} disabled>
          <Stack
            space="large"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Text align="center">
              <Muted>Select a Cover Image</Muted>
            </Text>
          </Stack>
        </FileUploadDropzone>
      )}
    </Fragment>
  );
}

export default FileUpload;
