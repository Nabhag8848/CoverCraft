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
          const tweetMessage = "Check out this awesome Figma plugin!";
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
          window.open("https://www.google.com", "_blank");
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
