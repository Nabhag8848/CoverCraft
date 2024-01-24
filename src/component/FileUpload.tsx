import {
  FileUploadDropzone,
  Muted,
  Stack,
  Text,
} from "@create-figma-plugin/ui";
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
function FileUpload() {
  const [image, setImage] = useState("");
  window.onmessage = (event) => {
    const pluginEvent = event.data.pluginMessage;
    const { type, node } = pluginEvent;
    switch (type) {
      case "no_node_intended": {
        setImage("");
        break;
      }
      case "encoded_node": {
        setImage(node);
        break;
      }
      default: {
        break;
      }
    }
  };

  function handleSelectedFiles(files: Array<File>) {}

  return (
    <Fragment>
      {image ? (
        <img src={image} alt="Cover Image" width="318px" height="172px" />
      ) : (
        <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
          <Stack
            space="large"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          >
            <Text align="center">
              <Muted>Select an Cover Image</Muted>
            </Text>
          </Stack>
        </FileUploadDropzone>
      )}
    </Fragment>
  );
}

export default FileUpload;
