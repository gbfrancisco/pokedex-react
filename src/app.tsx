import { RouterProvider } from 'react-router-dom';
import routes from '@features/routes';

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
