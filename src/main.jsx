import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // ✅ import Provider
import "./index.css";
import App from "./App.jsx";
import { store } from "./store.js"; // ✅ make sure store is a named export

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
