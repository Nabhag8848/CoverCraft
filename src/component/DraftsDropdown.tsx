import {
  Bold,
  Dropdown,
  DropdownOption,
} from "@create-figma-plugin/ui";
import { Fragment, h, JSX } from "preact";
import { useState } from "preact/hooks";
import { IoBookSharp } from "react-icons/io5";

function DraftsDropdown() {
  const [value, setValue] = useState<string>("blog-1");
  const options: Array<DropdownOption> = [
    {
      header: "Recents",
    },
    {
      value: "blog-1",
      text: "Blog 1",
    },
    "-",
    {
      text: "Blog 2",
      value: "blog-2",
    },
    {
      text: "Blog 3",
      value: "blog-3",
    },
    {
      text: "Blog 4",
      value: "blog-4",
    },
  ];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  }
  return (
    <Fragment>
      <Bold style={{ marginLeft: "2px" }}> Select Draft</Bold>
      <Dropdown
        icon={
          <div style={{ paddingTop: "8px" }}>
            <IoBookSharp />
          </div>
        }
        onChange={handleChange}
        options={options}
        value={value}
        variant="border"
        style={{ height: "35px", marginTop: "3px" }}
      />
    </Fragment>
  );
}

export default DraftsDropdown;
