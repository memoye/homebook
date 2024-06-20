import { Suspense } from "react";
import { NavBar } from "./components/navbar/NavBar";
import "./layout.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="layout">
        <NavBar />

        <main>
          <Outlet />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
