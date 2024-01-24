import { Button, Divider, Stack, Textbox } from "@create-figma-plugin/ui";
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import type { JSX } from "preact";
import { emit } from "@create-figma-plugin/utilities";
import { SaveAccessToken } from "../../types";
import { useAuth } from "./AuthContext";

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
      <Stack space="medium">
        <Textbox
          onInput={handleInput}
          password
          value={value}
          variant="border"
          placeholder="Paste Your Access Token"
        />
        <Button fullWidth onClick={handleClick}>
          Save Token
        </Button>
      </Stack>
    </Fragment>
  );
}

export default Auth;
