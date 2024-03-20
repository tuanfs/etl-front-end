import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";

const AppNew = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppNew />);
