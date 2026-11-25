import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import AppUseState from "./AppUseState.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <AppUseState />
    </Theme>
  </StrictMode>
);