import LayoutApp from "@app/layout/LayoutApp";
import { FavoritePage } from "@pages/favorite";
import { HomePage } from "@pages/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: LayoutApp,
        children: [
            {
                path: "/",
                Component: HomePage,
            },
            {
                path: "/favorites",
                Component: FavoritePage,
            },
        ],
    },
]);
