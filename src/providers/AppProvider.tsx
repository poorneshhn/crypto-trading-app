import type { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { IAppProviderProps } from "../types/types";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export const Providers: FC<IAppProviderProps> = ({ children }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div>Something went wrong: {error.message}</div>
      )}
    >
      <QueryClientProvider client={queryClient}>
          <ToastContainer/>
          {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export const AppProvider = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};
