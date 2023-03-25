import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Games from './components/Games'
import GameDetails from './components/GameDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Games />
  },
  {
    path: "/games/:gameId",
    element: <GameDetails />
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  );
}

export default App;
