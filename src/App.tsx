import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from '@pages/ErrorPage';
import MainPage from '@pages/MainPage';
import PokemonPage from '@pages/PokemonPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    // TODO: Create a MainLayout Component
    <Route errorElement={<ErrorPage />}>
      <Route element={<MainPage />} path="/"></Route>
      <Route element={<PokemonPage />} path="/pokemon/:id"></Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
