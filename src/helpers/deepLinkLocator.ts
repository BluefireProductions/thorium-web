import { Locator } from "@readium/shared";

export type QueryParamValue = string | string[] | undefined;

export const firstQueryParam = (value: QueryParamValue) => {
  return Array.isArray(value) ? value[0] : value;
};

export const encodeDeepLinkLocator = (locator: object) => {
  return encodeURIComponent(JSON.stringify(locator));
};

export const decodeDeepLinkLocatorParam = (locatorParam: string) => {
  try {
    return decodeURIComponent(locatorParam);
  } catch {
    return locatorParam;
  }
};

export const parseDeepLinkLocator = (value: QueryParamValue) => {
  const locatorParam = firstQueryParam(value);
  if (!locatorParam) return undefined;

  try {
    return Locator.deserialize(
      JSON.parse(decodeDeepLinkLocatorParam(locatorParam))
    );
  } catch {
    return undefined;
  }
};
