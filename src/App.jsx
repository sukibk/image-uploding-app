import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LayoutPage from "./pages/Layout.jsx";
import HomePage from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
