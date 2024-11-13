import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog, { loaderBlog } from "../pages/Blog";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post, { loaderPost } from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
