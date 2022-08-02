import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
