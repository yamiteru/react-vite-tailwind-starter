import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Component } from "@/types/react";
import Navigation from "./componnets/Navigation";
import Footer from "./componnets/Footer";

// Ideally move somewhere else or inline into Navigation component
const LINKS = [
  ["Homepage", "/", true],
  ["Test", "/test"],
];

const App: Component = () => (
  <BrowserRouter>
    <Navigation links={LINKS as any} />

    <main>{renderRoutes(routes)}</main>

    <Footer />
  </BrowserRouter>
);

export default App;
