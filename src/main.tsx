import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      bodyClassName="toastBody"
      toastClassName={(context) =>
        `glassToast ${
          context?.type === "success"
            ? "glassSuccess"
            : context?.type === "error"
              ? "glassError"
              : "glassDefault"
        }`
      }
    />
  </>,
  // </StrictMode>,
);
