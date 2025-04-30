import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import { Box, useTheme } from "@mui/material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  const theme=useTheme();
  return (
    
    <RouterProvider router={router} />
  

  );
}

export default App;
