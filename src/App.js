import "../src/asset/Scss/Style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./component/comman/Header";
import Footer from "./component/comman/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <div className="main-content">
          <Suspense>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      element={route.component}
                      exact={true}
                      strict={false}
                    />
                  )
                );
              })}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
