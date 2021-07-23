import { RouteConfig } from "react-router-config";
import HomePage from "@/pages/Home";
import TestPage from "@/pages/Test";

const paths: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/test",
    component: TestPage,
  },
];

export default paths;
