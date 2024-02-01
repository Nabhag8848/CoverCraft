import { Tabs, TabsOption } from "@create-figma-plugin/ui";
import { h, JSX } from "preact";
import { useState } from "preact/hooks";

import PostCoverImages from "../src/features/PostCoverImages/PostCoverImages";
import SearchCoverImages from "../src/features/SearchCoverImage/SearchCoverImages";
import Profile from "../src/component/Profile";

function Home() {
  const [option, setOption] = useState("🖼️ Cover Image");
  const [showMenu, setShowMenu] = useState(false);

  const options: Array<TabsOption> = [
    {
      children: <SearchCoverImages />,
      value: "🔍 Search Cover",
    },
    {
      children: <PostCoverImages />,
      value: "🖼️ Cover Image",
    },
  ];
  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newOption = event.currentTarget.value;
    setOption(newOption);
  }
  return (
    <div
      style={{ position: "relative" }}
      onClick={() => {
        if (showMenu) setShowMenu(false);
      }}
    >
      <Profile showMenu={showMenu} setShowMenu={setShowMenu} />
      <Tabs onChange={handleChange} options={options} value={option} />
    </div>
  );
}

export default Home;
