import { Route, Routes } from "react-router-dom";
import Authentication from "./components/Authentication";
import Product from "./components/Product";
import ProductsGrid from "./components/ProductsGrid";
import "./styles/general.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewProduct from "./components/NewProduct";
import { useSnackbar } from "notistack";
import Dashboard from "./components/Dashboard";

const App = () => {
  const { enqueueSnackbar } = useSnackbar();

  const snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant: variant });
  };

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductsGrid snackbar={snackbar} />} />
        <Route path="/login" element={<Authentication snackbar={snackbar} />} />
        <Route path="/product" element={<Product snackbar={snackbar} />} />
        <Route
          path="/addNewProduct"
          element={<NewProduct snackbar={snackbar} />}
        />
        <Route path="/dashboard" element={<Dashboard snackbar={snackbar} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
