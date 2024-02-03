import { Route, Routes, useLocation } from "react-router-dom";

import {
  HomeComponent,
} from "../pages";

const AppRoutes = () => {
  const location = useLocation();

  const routes = [
    { path: "/", ComponentName: <HomeComponent /> },
    // { path: "*", ComponentName: <PageNotFound /> },
  ];

  return (
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, ComponentName }) => {
          return (
            <Route
              key={path}
              path={path}
              element={ComponentName}
            />
          );
        })}
      </Routes>
  );
};

export default AppRoutes;
