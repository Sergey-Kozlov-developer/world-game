import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "./0_app/App.tsx";
import { store } from "@app/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
