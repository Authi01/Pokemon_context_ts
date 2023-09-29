import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import { PokemonProvider } from "./PokemonContext";

function App() {
  return (
    <>
      <Router>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route
              path="/description/:name"
              element={<ProductDescriptionPage />}
            />
          </Routes>
        </PokemonProvider>
      </Router>
    </>
  );
}

export default App;
