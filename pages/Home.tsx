import { Tabs, TabsOption } from "@create-figma-plugin/ui";
import { h, JSX } from "preact";
import PostCoverImages from "../src/features/PostCoverImages/PostCoverImages";
import { useState } from "preact/hooks";
import SearchCoverImages from "../src/features/SearchCoverImage/SearchCoverImages";

function Home() {
  const [option, setOption] = useState("Cover Image");
  const options: Array<TabsOption> = [
    {
      children: <SearchCoverImages />,
      value: "Search Cover",
    },
    {
      children: <PostCoverImages />,
      value: "Cover Image",
    },
    {
      children: <div>History</div>,
      value: "History",
    },
  ];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOption = event.currentTarget.value;
    setOption(newOption);
  }
  return <Tabs onChange={handleChange} options={options} value={option} />;
}

export default Home;
