import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Apply for cuHacking 2025!/);
});

test("get started link", async ({ page }) => {
  await page.goto("http://localhost:8000");

  await expect(page.locator("body")).toContainText(
    "Welcome to trpc with next-auth!",
  );

  await expect(page.locator("body")).toContainText(
    "Sign in to see the latest post.",
  );

  await page.getByRole("link", { name: "Sign in" }).click();

  await expect(
    page.getByRole("button", { name: "Sign in with Google" }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Sign in with Google" }).click();
});
