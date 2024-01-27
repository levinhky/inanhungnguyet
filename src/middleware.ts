import createMiddleware from "next-intl/middleware";
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: "vi",
  localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/"],
};
