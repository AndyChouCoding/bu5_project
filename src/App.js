import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App =() => {
  const element = useRoutes(routes);
  return element;
};
export default App;