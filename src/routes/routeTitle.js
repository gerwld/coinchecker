export const allRouteTitles = {
  "/" : undefined,
  "/dashboard": "Dashboard",
  "/dashboard/fav": "Saved",
  "/dashboard/settings": "Settings",
  "/login": "Sign In",
  "/login/forgot": "Restore access",
  "/register": "Registration",
};

export function getTitleByLocation(loc, allRoute = allRouteTitles) {
  let result = "/dashboard";
  let lucky = allRoute[loc];
  if (lucky) return lucky;

  Object.keys(allRoute).find((e) => {
    if (loc.includes(e, 0)) {
      result = e;
      return true;
    }});
  return allRoute[result];
};
