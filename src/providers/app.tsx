import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <>test
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
          Refresh
      </button>
    </>
  );
};

  type AppProviderProps = {
    children: React.ReactNode;
  };

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <React.Suspense
        fallback={
          <>
                Loading Now...
          </>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <Router>{children}</Router>
          </HelmetProvider>
        </ErrorBoundary>
      </React.Suspense>
    </>
  );
};
