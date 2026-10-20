import { test, expect } from "@playwright/test";

// Настройка конкретно для этого файла
test.use({ headless: false });
test("test", async ({ page }) => {
  test.setTimeout(5000);
  await page.goto("https://www.ebay.com/");
  await page.getByRole("link", { name: "Sign in" }).click();
});
