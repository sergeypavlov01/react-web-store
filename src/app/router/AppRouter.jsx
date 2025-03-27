import { Routes, Route } from "react-router";
import { publicRouter, privateRouter } from "./router";
import { Layout } from "../../components/Layout/Layout";
import { HomePage } from "../../pages/HomePage";
import { RequireAuth } from "../../components/RequireAuth/RequireAuth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {publicRouter.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        {privateRouter.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<RequireAuth>{element}</RequireAuth>}
          />
        ))}
      </Route>
    </Routes>
  );
};
