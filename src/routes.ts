// GitHub Pages is static hosting and doesn't support SPA deep-links out of the box.
// Hash-based routing works everywhere (URL like /#/sensors).
import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Sensors } from "./components/Sensors";
import { Equipment } from "./components/Equipment";
import { Reports } from "./components/Reports";
import { NotFound } from "./components/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "sensors", Component: Sensors },
      { path: "equipment", Component: Equipment },
      { path: "reports", Component: Reports },
      { path: "*", Component: NotFound },
    ],
  },
]);
