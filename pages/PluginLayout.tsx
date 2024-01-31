import { Fragment, h } from "preact";
import { LoadingIndicator, MiddleAlign } from "@create-figma-plugin/ui";
import { useState } from "react";
import { on } from "@create-figma-plugin/utilities";

import Auth from "../src/features/Auth/Auth";
import { useAuth } from "../src/features/Auth/AuthContext";
import Home from "./Home";
import { DeleteAccessToken } from "../src/types";

function PluginLayout() {
  const [spinner, setSpinner] = useState(true);
  const { isAuthenticated } = useAuth();
  
  if (spinner) {
    setTimeout(() => {
      setSpinner(false);
    }, 30);
    return (
      <MiddleAlign>
        <LoadingIndicator />
      </MiddleAlign>
    );
  }

  return <Fragment>{isAuthenticated ? <Home /> : <Auth />}</Fragment>;
}

export default PluginLayout;
