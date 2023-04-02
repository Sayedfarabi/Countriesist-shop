import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import { Toaster } from "react-hot-toast";

export const DataContext = createContext()

function App() {
  const [countries, setCountries] = useState([])


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(data => setCountries(data?.data))
  }, [])

  const dataInfo = {
    countries
  }
  return (
    <div>
      <DataContext.Provider value={dataInfo}>
        <RouterProvider router={routes} />
        <Toaster></Toaster>
      </DataContext.Provider>
    </div>
  );
}

export default App;
