import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { h } from "preact";
import PluginLayout from "../pages/PluginLayout";
import CustomApolloClient from "./context/CustomApolloClient";
import { AuthProvider } from "./features/Auth/AuthContext";
import CustomQueryProvider from "./context/CustomQueryProvider";

import styles from "./ui.css";
function Plugin() {
  return (
    <Container space="medium" style={styles.main}>
      <VerticalSpace space="large" />
      <CustomQueryProvider>
        <AuthProvider>
          <CustomApolloClient>
            <PluginLayout />
          </CustomApolloClient>
        </AuthProvider>
      </CustomQueryProvider>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
