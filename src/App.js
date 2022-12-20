import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import СartContextProvider from "./contexts/СartContextProvider";

import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div>
      <СartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MyRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </СartContextProvider>
    </div>
  );
}

export default App;
