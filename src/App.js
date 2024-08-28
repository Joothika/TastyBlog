import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BlogContainerPage,
  HomePage,
  onShowSavedList,
  RecipePage,
  SaveListPage,
} from "./utils/Export";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <BlogContainerPage />,
        },
        {
          path: "/recipe/:recipeId",
          element: <RecipePage />,
        },
        {
          path: "/savelist",
          element: <SaveListPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
