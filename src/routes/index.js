// import About from "pages/About";
// import Home from "pages/Home";
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

const Navigation = (props) => {
  return (
    <LazyLoadComponent>
      <BrowserRouter>
        <PublicLayout>
          <Routes>
            <Route index path={"/"} element={<Home />} />
            <Route path={"residential"} element={<Residential />} />
            <Route path={"commercial"} element={<Commercial />} />
            <Route path={"about-us"} element={<About />} />
            <Route path={"team"} element={<Team />} />
            <Route path={"news"} element={<News />} />
            <Route path={"contact"} element={<Contact />} />
            {/* <Route path={"admin"} element={<About />} /> */}
          </Routes>
        </PublicLayout>
      </BrowserRouter>
    </LazyLoadComponent>
  );
};

export default Navigation;
