import "./App.css";
import AppRoutes from "./routes/index";
import Header from "./components/Header";
import HomePage from "./page/home-page";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <AppRoutes />
    </div>
  );
}

export default App;
