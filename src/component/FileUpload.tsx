import {
  FileUploadDropzone,
  Muted,
  Stack,
  Text,
} from "@create-figma-plugin/ui";
import { h } from "preact";
function FileUpload() {
  function handleSelectedFiles(files: Array<File>) {}
  return (
    <FileUploadDropzone onSelectedFiles={handleSelectedFiles}>
      <Stack space="large" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Text align="center">
          <Muted>Select an Cover Image</Muted>
        </Text>
      </Stack>
    </FileUploadDropzone>
  );
}

export default FileUpload;
