import { Bold, Dropdown, DropdownOptionValue } from "@create-figma-plugin/ui";
import { Fragment, h, JSX } from "preact";
import { IoBookSharp } from "react-icons/io5";
import { getListOfPosts } from "../features/PostCoverImages/usePosts";

function PostsDropdown({ data, option, setOption }) {
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOption = event.currentTarget.value;
    setOption(newOption);
  }

  const options: Array<DropdownOptionValue> = getListOfPosts(data);

  return (
    <Fragment>
      <Bold style={{ marginLeft: "2px" }}>Post</Bold>
      <Dropdown
        icon={
          <div style={{ paddingTop: "8px" }}>
            <IoBookSharp />
          </div>
        }
        onChange={handleChange}
        options={options}
        value={option}
        variant="border"
        style={{ height: "35px", marginTop: "10px" }}
        placeholder="Select Post"
      />
    </Fragment>
  );
}

export default PostsDropdown;
