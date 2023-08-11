import "./App.css";
import AppRoutes from "./routes/index";
import Header from "./components/Header";
import HomePage from "./page/home-page";
import "./body.css"


function App() {
  return (
    <div className="App body">
      <div>
        <Header />
      </div>

      <AppRoutes />
    </div>
  );
}

export default App;
