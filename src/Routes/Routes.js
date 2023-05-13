import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Messenger from "../pages/Messenger";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element:<Messenger></Messenger>
           }
        ])
    }
])