/**
 * removeTrailingSlash from routes that are not just a single slash
 * @param  {String} route
 * @return {String} route without trailing slash
 */
const removeTrailingSlash = route => {
  if (route.length > 1 && route.charAt(route.length - 1) === "/") {
    return route.substring(0, route.length - 1);
  }
  return route;
};

/**
 * cleanRoute makes the route safe to use within the application
 * @param  {String} route the pages path
 * @return {String} the safe route
 */
export const cleanRoute = route => {
  let cleanedRoute = route.toLowerCase();
  cleanedRoute = removeTrailingSlash(cleanedRoute);
  return cleanedRoute;
};
