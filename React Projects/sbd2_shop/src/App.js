import { Route, Routes } from "react-router-dom";
import Authentication from "./components/Authentication";
import Product from "./components/Product";
import ProductsGrid from "./components/ProductsGrid";
import "./styles/general.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSnackbar } from "notistack";

const App = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant: variant });
  };

  return (
    <div className="app">
      <div className="product">
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductsGrid snackbar={snackbar} />} />
          <Route
            path="/login"
            element={<Authentication snackbar={snackbar} />}
          />
          <Route path="/product" element={<Product snackbar={snackbar} />} />
        </Routes>
        <Footer />
      </div>
      {/* <Product /> */}
    </div>
  );
};

export default App;
