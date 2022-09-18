// import About from "pages/About";
// import Home from "pages/Home";
import Enums from "config/enums";
import PublicLayout from "layout/PublicLayout";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LazyLoadComponent from "./LazyLoad";
const Home = React.lazy(() => import("pages/Home"));
const About = React.lazy(() => import("pages/About"));
const Residential = React.lazy(() => import("pages/Residential"));
const Commercial = React.lazy(() => import("pages/Commercial"));
const Team = React.lazy(() => import("pages/Team"));
const News = React.lazy(() => import("pages/News"));
const Contact = React.lazy(() => import("pages/Contact"));
const ResidentialDetail = React.lazy(() => import("pages/Residential/Detail"));
const ResidentialList = React.lazy(() => import("pages/Residential/List"));

const CommercialDetail = React.lazy(() => import("pages/Commercial/Detail"));

const CommercialList = React.lazy(() => import("pages/Commercial/List"));
const Login = React.lazy(() => import("pages/Admin/Login"));

const Navigation = (props) => {
  return (
    <LazyLoadComponent>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path={Enums.PATH.HOME}
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route path={Enums.PATH.LOGIN} element={<Login />} />

          <Route
            path={Enums.PATH.RESIDENTIAL._}
            element={
              <PublicLayout>
                <Residential />
              </PublicLayout>
            }
          >
            <Route path="" element={<ResidentialList />} />
            <Route path=":id" element={<ResidentialDetail />} />
          </Route>
          <Route path={Enums.PATH.COMMERCIAL._} element={<Commercial />}>
            <Route
              path=""
              element={
                <PublicLayout>
                  <CommercialList />
                </PublicLayout>
              }
            />
            <Route path=":id" element={<CommercialDetail />} />
          </Route>
          <Route
            path={Enums.PATH.ABOUT}
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path={Enums.PATH.TEAM}
            element={
              <PublicLayout>
                <Team />
              </PublicLayout>
            }
          />
          {/* <Route path={Enums.PATH.NEWS} element={<News />} /> */}
          <Route
            path={Enums.PATH.CONTACT}
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />
          {/* <Route path={"admin"} element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </LazyLoadComponent>
  );
};

export default Navigation;
