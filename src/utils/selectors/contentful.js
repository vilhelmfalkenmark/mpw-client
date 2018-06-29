import {
  view,
  lensPath
  // lensIndex
} from "ramda";

const graphQLErrorsLens = lensPath(["data", "error", "graphQLErrors"]);
// const httpCodeLens = lensPath(["code"]);

export const getHTTPErrorCode = s => {
  const graphQLErrors = view(graphQLErrorsLens, s);

  if (graphQLErrors) {
    return graphQLErrors[0].code === 404;
  }
  return null;
};

export default getHTTPErrorCode;
