import { Selector, ClientFunction } from "testcafe";
import initiate from "./initiate";

fixture`Bag Overview`.page`https://linasmatkasse.se`;

test("Product type link should change when switching dinner amount", async t => {
  await initiate(t, "/");

  // All the elements used
  const button = Selector(".-FJHsJdCZrdki5rdxziZh");
  const productTypeButtons = Selector("._3DUlhxBle7WO-5cd9RJ2PL");

  // Switch to 3 dinners
  await t.click(productTypeButtons.nth(1));
  await t
    .expect(await button.getAttribute("href"))
    .eql("/linas-barnkasse?type=11");
});

test("Product type link should change when selecting addons", async t => {
  await initiate(t, "/");

  // All the elements used
  const button = Selector(".-FJHsJdCZrdki5rdxziZh");
  const select = Selector(".QJIbtB0XZwOSDXa0wk43F");
  const options = select.find("option");

  // Select "Laktosfri" from the selectbox
  await t.click(select).click(options.nth(0));
  await t
    .expect(await button.getAttribute("href"))
    .eql("/linas-barnkasse?type=12");

  // Select "Glutenfri" from the selectbox
  await t.click(select).click(options.nth(1));
  await t
    .expect(await button.getAttribute("href"))
    .eql("/linas-barnkasse?type=20");
});
