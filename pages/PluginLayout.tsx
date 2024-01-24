import { Fragment, h } from "preact";
import Auth from "../src/features/Auth/Auth";
import { useAuth } from "../src/features/Auth/AuthContext";
import Home from "./Home";

function PluginLayout() {
  const { isAuthenticated } = useAuth();
  return <Fragment>{isAuthenticated ? <Home /> : <Auth />}</Fragment>;
}

export default PluginLayout;
