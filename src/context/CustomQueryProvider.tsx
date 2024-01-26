import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { h } from "preact";

const client = new QueryClient();

const PreactQueryClientProvider = QueryClientProvider;

function CustomQueryProvider({ children }) {
  return (
    <PreactQueryClientProvider client={client}>
      {children}
    </PreactQueryClientProvider>
  );
}

export default CustomQueryProvider;
