import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
