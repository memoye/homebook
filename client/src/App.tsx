import { Suspense } from "react";
import { NavBar } from "./components/navbar/NavBar";
import "./layout.scss";
import { Outlet, useLocation } from "react-router-dom";
import Fallback from "./components/fallback/Fallback";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>

      <main>
        <Suspense fallback={<Fallback forPath={pathname} />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
