import { createBrowserRouter, RouterProvider } from "react-router";

// my components
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
