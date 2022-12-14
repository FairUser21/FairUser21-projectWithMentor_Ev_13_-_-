import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import –°artContextProvider from "./contexts/–°artContextProvider";

import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div>
      <–°artContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MyRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </–°artContextProvider>
    </div>
  );
}

export default App;
