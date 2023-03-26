import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Games from './components/Games'
import GameDetails from './components/GameDetails'
import Error from './components/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Games />,
    errorElement: <Error />
  },
  {
    path: "/games/:gameId",
    element: <GameDetails />,
    errorElement: <Error />
  }
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
