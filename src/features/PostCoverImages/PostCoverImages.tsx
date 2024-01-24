import { h, JSX } from "preact";
import FileUpload from "../../component/FileUpload";
import {
  Button,
  Divider,
  LoadingIndicator,
  MiddleAlign,
  Stack,
} from "@create-figma-plugin/ui";
import DraftsDropdown from "../../component/DraftsDropdown";
import { useDrafts } from "./useDrafts";
function PostCoverImages() {
  const { data, isDraftError, isDraftLoading } = useDrafts();

  if (isDraftLoading)
    return (
      <MiddleAlign>
        <LoadingIndicator />
      </MiddleAlign>
    );
  // later handle error
  if (isDraftError) return <h4>Error</h4>;

  function handleSetCoverImage(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {}
  return (
    <div>
      <Stack space="large">
        <Divider />
        <FileUpload />
        <Divider />
        <DraftsDropdown data={data} />
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
