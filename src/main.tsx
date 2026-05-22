import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import QueryProvider from "@/app/providers/query-provider";
import AuthProvider from "@/app/providers/auth-provider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);