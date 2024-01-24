import { h, JSX } from "preact";
import FileUpload from "../../component/FileUpload";
import { Button, Divider, Stack } from "@create-figma-plugin/ui";
import DraftsDropdown from "../../component/DraftsDropdown";
function PostCoverImages() {
  function handleSetCoverImage(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {}
  return (
    <div>
      <Stack space="large">
        <Divider />
        <FileUpload />
        <Divider />
        <DraftsDropdown />
        <Divider />
        <Button
          fullWidth
          onClick={handleSetCoverImage}
          style={{ marginTop: "20px" }}
        >
          Set as Cover
        </Button>
      </Stack>
    </div>
  );
}

export default PostCoverImages;
