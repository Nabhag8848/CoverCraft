import { Container, render, VerticalSpace } from "@create-figma-plugin/ui";
import { h } from "preact";
import PluginLayout from "../pages/PluginLayout";
import CustomApolloClient from "./context/CustomApolloClient";
import { AuthProvider } from "./features/Auth/AuthContext";

function Plugin() {
  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <AuthProvider>
        <CustomApolloClient>
          <PluginLayout />
        </CustomApolloClient>
      </AuthProvider>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
