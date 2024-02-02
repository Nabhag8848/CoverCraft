import { h } from "preact";
import { emit } from "@create-figma-plugin/utilities";

import { RiTwitterXFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

import styles from "./styles/MenuOptions.css";
import { DeleteAccessToken } from "../types";
import { useAuth } from "../features/Auth/AuthContext";

function MenuOptions() {
  const { setToken } = useAuth();

  return (
    <div class={styles.dropDown}>
      <p
        class={styles.dropDownItem}
        onClick={() => {
          //TODO: Update Tweet Message
          const tweetMessage = "Check out CoverCraft - @figma x @hashnode by @NabhagMotivaras and @AsterJoules" 
          + "%0a%0a" + "Seamlessly Set Cover Images from Figma to Hashnode." + "%0a" + 
          "Say Goodbye to downloads, naming and Focus on craft Cover Images with zero hassle." + "%0a%0a"
          + "Website: https://cover-craft.vercel.app/" + "%0a%0a" + "https://www.figma.com/community/plugin/1333733891388229126";

          window.open(
            `https://twitter.com/intent/tweet?text=${tweetMessage}`,
            "_blank"
          );
        }}
      >
        <RiTwitterXFill /> Share on Twitter
      </p>
      <p
        onClick={() => {
          // TODO: Add link to plugin page
          window.open("https://cover-craft.vercel.app", "_blank");
        }}
        class={styles.dropDownItem}
      >
        <FaInfoCircle />
        About Us
      </p>
      <p
        onClick={() => {
          emit<DeleteAccessToken>("DELETE_ACCESS_TOKEN");
          setToken("");
        }}
        class={styles.dropDownItem}
      >
        <TbLogout />
        Log Out
      </p>
    </div>
  );
}

export default MenuOptions;
