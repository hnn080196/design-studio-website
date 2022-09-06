import React from "react";
import { Route } from "react-router-dom";

const PublicRouter = (props) => {
  const { layout: Layout, component: Component, layoutProps, ...rest } = props;
  return (
    <Route
      {...rest}
      element={(matchProps) => (
        <Layout {...layoutProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default PublicRouter;
