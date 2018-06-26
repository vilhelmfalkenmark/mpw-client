import universal from "react-universal-component";
// import AuthenticateBeforeRender from "hocs/AuthenticateBeforeRender";
// import store from "reduxStore/store";

//////////////////////////////////////////////////
/**
 * CODE SPLITTING CHUNKS
 */
//////////////////////////////////////////////////
const Authentication = universal(
  () =>
    import(/* webpackChunkName: 'authentication' */ "entryPoints/Authentication"),
  {
    resolve: () => require.resolveWeak("entryPoints/Authentication"),
    chunkName: "authentication"
  }
);

// // DynamicPage
const DynamicPage = universal(
  () => import(/* webpackChunkName: 'dynamicPage' */ "entryPoints/DynamicPage"),
  {
    resolve: () => require.resolveWeak("entryPoints/DynamicPage"),
    chunkName: "dynamicPage"
  }
);

// Deliveries
const Deliveries = universal(
  () => import(/* webpackChunkName: 'deliveries' */ "entryPoints/Deliveries"),
  {
    resolve: () => require.resolveWeak("entryPoints/Deliveries"),
    chunkName: "deliveries"
  }
);

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
export const AUTHENTICATION_ROUTE = {
  exact: true,
  title: "Logga in",
  path: "/login/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: false,
  component: Authentication
};

export const DYNAMIC_ROUTE = {
  exact: false,
  title: "Dynamic page",
  path: "/",
  // path: /^(?!.*(user|login)).*$/,
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: false,
  component: DynamicPage
};

export const DELIVERIES_ROUTE = {
  exact: true,
  title: "Leveranser",
  path: "/user/deliveries/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: true,
  component: Deliveries
};

export default [AUTHENTICATION_ROUTE, DELIVERIES_ROUTE, DYNAMIC_ROUTE];
