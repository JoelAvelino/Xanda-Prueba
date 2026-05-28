import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { RegionCatalog } from "./pages/RegionCatalog";
import { ProducersList } from "./pages/ProducersList";
import { ProducerDetail } from "./pages/ProducerDetail";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/region/:regionId",
    Component: RegionCatalog,
  },
  {
    path: "/region/:regionId/:category",
    Component: ProducersList,
  },
  {
    path: "/producer/:producerId",
    Component: ProducerDetail,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
