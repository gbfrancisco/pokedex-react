import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainPage />} path="/" errorElement={<ErrorPage />}></Route>,
  ),
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
