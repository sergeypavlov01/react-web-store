import { Outlet, useMatch } from "react-router";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  const match = useMatch("/");

  return (
    <>
      <Header />
      <div className={match ? "container" : "container center"}>
        {match ? <Sidebar /> : null}
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

/* I love programming */
