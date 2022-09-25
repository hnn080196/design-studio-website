import React, { Suspense } from "react";
import Loading from "component/Loading";

const LazyLoadComponent = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default LazyLoadComponent;
