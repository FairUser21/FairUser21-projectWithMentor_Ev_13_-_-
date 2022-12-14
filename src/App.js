import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
