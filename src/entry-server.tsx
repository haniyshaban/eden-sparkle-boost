import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "./App";

/** Renders one page to HTML at build time, so its text is in the file before any script runs. */
export const render = (url: string) =>
  renderToString(
    <AppShell>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppShell>,
  );
