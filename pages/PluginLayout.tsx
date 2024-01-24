import { Fragment, h } from "preact";
import Auth from "../src/features/Auth/Auth";
import { useAuth } from "../src/features/Auth/AuthContext";
import Home from "./Home";
import { useState } from "react";
import { LoadingIndicator, MiddleAlign } from "@create-figma-plugin/ui";

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
