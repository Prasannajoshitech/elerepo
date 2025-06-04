import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale =
    (await cookies()).get("MYNEXTAPP_LOCALEMANISH")?.value || "en";

  const locale = cookieLocale;

  //   const locale = "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
