import { APPS } from "./constants";

export const getApp = () => {
  const subDomain = getSubDomain(window.location.hostname);
  let selectedApp = APPS.find((app) => app.main);
  if (subDomain === "") {
    return selectedApp.app;
  }
  selectedApp = APPS.find((app) => app.subdomain === subDomain) || selectedApp;
  return selectedApp.app;
};

const getSubDomain = (location) => {
  const locationPart = location.split(".");
  const isLocalhost = locationPart.slice(-1)[0] === "localhost";
  let sliceTill = -2;
  if (isLocalhost) {
    sliceTill = -1;
    return locationPart.slice(0, sliceTill).join("");
  }
};
