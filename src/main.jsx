import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <BrowserRouter>
  <MyNavbar />
  <App />
  </BrowserRouter>
    
  </>
);
