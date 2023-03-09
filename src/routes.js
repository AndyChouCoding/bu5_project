
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";


const routes = [
  { path: "/", element: <Home />, chidren: [] },
  { path: "/following", element: <Following />, chidren: [] },
  { path: "*", element: <NotFound />, chidren: [] },

];

export default routes;