import { ClientFunction } from "testcafe";

export default async (t: TestController, route: string) => {
  const setCookie = ClientFunction(() => {
    document.cookie =
      'lmk_c-postcode={"postcode":"12551","deliveryStatus":true}';
  });
  await setCookie();
  await t.navigateTo(route);
};
