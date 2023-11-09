function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const HOME = "/dashboard";
export const AUTH = "/";

export const PATH_AUTH = {
  root: AUTH,
  login_logout: path(AUTH, ""),
};

export const PATH_HOME = {
  root: HOME,
  home: path(HOME, "/home/:name"),
};
