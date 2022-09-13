import React, { Suspense } from "react";
const LoaderComponent = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
const LazyLoadComponent = ({ children }) => {
  return <Suspense fallback={<LoaderComponent />}>{children}</Suspense>;
};

export default LazyLoadComponent;
