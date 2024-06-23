import "./layout.scss";
import { Suspense } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Fallback from "./components/fallback/Fallback";
import { SliderContextProvider } from "./context/sliderContext";

function App() {
  const { pathname } = useLocation();

  return (
    <SliderContextProvider>
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
    </SliderContextProvider>
  );
}

export default App;
