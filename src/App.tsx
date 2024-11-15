import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/router";
import { RouterProvider } from "@tanstack/react-router";

export default function App() {
    return <RouterProvider router={router} />;
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(document.getElementById("app")!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
