import { Button, Muted, Textbox } from "@create-figma-plugin/ui";
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import type { JSX } from "preact";
import { emit } from "@create-figma-plugin/utilities";

import { SaveAccessToken } from "../../types";
import { useAuth } from "./AuthContext";
import AuthSvg from "./AuthSvg";
import styles from "./styles/auth.css";

function Auth() {
  const [value, setValue] = useState<string>("");
  const { setToken } = useAuth();
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);
  }

  async function handleClick() {
    if (!value) return;
    emit<SaveAccessToken>("SAVE_ACCESS_TOKEN", value);
    setToken(value);
  }

  return (
    <Fragment>
      <div className={styles.authContainer}>
        <h1 className={styles.heading}>Figma x Hashnode</h1>
        <p className={styles.subScript}>
           Seamlessly set your post <strong> Cover Images </strong>
          <br />
        </p>
        <div className={styles.authSvg}>
          <AuthSvg />
        </div>
        <Textbox
          onInput={handleInput}
          password
          value={value}
          variant="border"
          placeholder="Enter Your Access Token"
        />
        <div style={{ height: "10px" }}></div>
        <Button fullWidth onClick={handleClick}>
          Save Token
        </Button>
        <div style={{ height: "10px" }}></div>
        <p className={styles.preGetLinkNow}>Don't have an access token?</p>
        <p
          onClick={() => {
            window.open("https://hashnode.com/settings/developer", "_blank");
          }}
          className={styles.getLinkNow}
        >
          Create Access Token
        </p>
        <Muted style={{ marginLeft: "31%", marginTop: "30px" }}>Powered by Hashnode</Muted>
      </div>
    </Fragment>
  );
}

export default Auth;
