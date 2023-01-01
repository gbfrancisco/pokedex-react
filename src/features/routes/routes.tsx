import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ErrorPage from '@pages/error-page';
import MainPage from '@pages/main-page';
import PokemonPage from '@pages/pokemon-page';
import UiMainLayout from '@features/ui';

const routes = createBrowserRouter(
  createRoutesFromElements(
    // TODO: Create a UiMainLayout Component
    <Route element={<UiMainLayout />} errorElement={<ErrorPage />}>
      <Route element={<MainPage />} path="/"></Route>
      <Route element={<PokemonPage />} path="/pokemon/:id"></Route>
    </Route>,
  ),
);

export default routes;
