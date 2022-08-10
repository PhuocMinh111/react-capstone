import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import { Suspense } from "react";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
