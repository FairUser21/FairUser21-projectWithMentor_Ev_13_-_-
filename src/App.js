import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MyRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
