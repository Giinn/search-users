import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersPage } from "./users/ui/components";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  );
};
