import universal from "react-universal-component";

import EntryPointPlaceholder from "components/loading/EntryPointPlaceholder";

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
    chunkName: "authentication",
    loading: EntryPointPlaceholder
  }
);

const StartPage = universal(
  () => import(/* webpackChunkName: 'startPage' */ "entryPoints/StartPage"),
  {
    resolve: () => require.resolveWeak("entryPoints/StartPage"),
    chunkName: "startPage",
    loading: EntryPointPlaceholder
  }
);

// // DynamicPage
const DynamicPage = universal(
  () => import(/* webpackChunkName: 'dynamicPage' */ "entryPoints/DynamicPage"),
  {
    resolve: () => require.resolveWeak("entryPoints/DynamicPage"),
    chunkName: "dynamicPage",
    loading: EntryPointPlaceholder
  }
);

// Deliveries
const Deliveries = universal(
  () => import(/* webpackChunkName: 'deliveries' */ "entryPoints/Deliveries"),
  {
    resolve: () => require.resolveWeak("entryPoints/Deliveries"),
    chunkName: "deliveries",
    loading: EntryPointPlaceholder
  }
);

// MyDetails
const MyDetails = universal(
  () => import(/* webpackChunkName: 'myDetails' */ "entryPoints/MyDetails"),
  {
    resolve: () => require.resolveWeak("entryPoints/MyDetails"),
    chunkName: "myDetails",
    loading: EntryPointPlaceholder
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
  navLink: "/login/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: false,
  component: Authentication
};

export const START_PAGE_ROUTE = {
  exact: true,
  title: "Välkommen till Linas Matkasse",
  path: "/",
  navLink: "/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: false,
  component: StartPage
};

export const DYNAMIC_ROUTE = {
  exact: true,
  title: "Dynamic page",
  path: "/:content/",
  navLink: "/om-oss/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: false,
  component: DynamicPage
};

export const DELIVERIES_ROUTE = {
  exact: true,
  title: "Leveranser",
  path: "/user/deliveries/",
  navLink: "/user/deliveries/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: true,
  component: Deliveries
};

export const MY_DETAILS_ROUTE = {
  exact: true,
  title: "Mitt konto",
  path: "/user/mydetails/",
  navLink: "/user/mydetails/",
  renderHeader: true,
  renderFooter: true,
  requiresAuthentication: true,
  component: MyDetails
};

export default [
  AUTHENTICATION_ROUTE,
  START_PAGE_ROUTE,
  DELIVERIES_ROUTE,
  DYNAMIC_ROUTE,
  MY_DETAILS_ROUTE
];
