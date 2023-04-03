import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Toaster } from "react-hot-toast";

export const DataContext = createContext()

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={routes} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
