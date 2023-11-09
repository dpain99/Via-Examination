import * as React from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../components/LoadingScreen";
import { PATH_AUTH, PATH_HOME } from "./path";

const Loadable = (Component: React.ElementType) => (props: any) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: PATH_AUTH.login_logout,
      element: <Authen />,
    },
    {
      path: PATH_HOME.home,
      element: <Home />,
    },
  ]);
};

const Authen = Loadable(React.lazy(() => import("../screens/Auth")));
const Home = Loadable(React.lazy(() => import("../screens//Home")));

export default Router;
