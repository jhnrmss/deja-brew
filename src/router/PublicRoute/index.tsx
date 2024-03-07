import { RouteObject } from "react-router-dom";
import Container from "./Container";
import LandingPage from "@/pages/LandingPage";

export const PublicRoutes: RouteObject = {
  path: "/",
  element: <Container />,
  children: [{ index: true, element: <LandingPage /> }],
};
