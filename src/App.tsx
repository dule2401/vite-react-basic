import { Suspense } from "react";
import "./App.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { ThemeSettingsProvider } from "./shared/contexts/ThemeSettings";
import { PageHeader } from "./shared/components";
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

function App() {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        revalidateOnMount: false,
        revalidateOnFocus: false,
      }}
    >
      <ThemeSettingsProvider
        defaultSettings={{
          themeMode: "light",
        }}
      >
        {/* <PageHeader> */}
          <Suspense fallback={<div>...Loading</div>}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Suspense>
        {/* </PageHeader> */}
      </ThemeSettingsProvider>
    </SWRConfig>
  );
}

export default App;
