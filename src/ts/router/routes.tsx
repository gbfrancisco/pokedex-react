import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../routes/App";
import ErrorPage from "../../routes/ErrorPage";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/" errorElement={<ErrorPage />} />
  )
);

export default routes;
