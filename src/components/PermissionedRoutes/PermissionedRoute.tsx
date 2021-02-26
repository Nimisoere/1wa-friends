import * as React from "react";
import { Route, RouteProps } from "react-router";
import { PropsFromRedux } from ".";
import Layout from "../Layout/Layout";
import { checkPermissions } from "../../utils/accessControl";
import NoAccess from "./NoAccess";

interface IPermissionedRouteProps extends PropsFromRedux, RouteProps {
  allowedPermissions: string[];
}

const PermissionedRoute: React.FC<IPermissionedRouteProps> = ({
  user,
  children,
  allowedPermissions,
  ...rest
}) => {
  const permissions = [""];
  return (
    <Route {...rest}>
      {checkPermissions(permissions, allowedPermissions) ? (
        children
      ) : (
        <Layout
          component={
            <NoAccess allowedPermissions={allowedPermissions} {...rest} />
          }
        />
      )}
    </Route>
  );
};

export default PermissionedRoute;
