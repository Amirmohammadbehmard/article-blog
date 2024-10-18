import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <HashRouter>
      <MyNavbar />
      <App />
    </HashRouter>
  </>
);
