import * as pulumi from "@pulumi/pulumi";
import Table from "cli-table3";
import * as netlify from "netlify";
import chalk from "chalk";
import { sites, tableStyle, emojiMap } from "./config";

const tableFields = [
  {
    key: "domain",
    isStatic: true,
  },
  {
    key: "baseDirectory",
  },
  {
    key: "packageDirectory",
  },
  {
    key: "publishDirectory",
  },
  {
    key: "id",
    isStatic: true,
  },
];

const table = new Table({
  ...tableStyle,
});

table.push([
  {
    content: chalk.bold.yellowBright("🌐 Project"),
    rowSpan: 2,
    hAlign: "center",
    vAlign: "center",
  },
  {
    content: chalk.bold.bgYellow.black("📂 Directory"),
    colSpan: 3,
    hAlign: "center",
    vAlign: "center",
  },
  {
    content: chalk.bold.whiteBright("ID"),
    rowSpan: 2,
    hAlign: "center",
    vAlign: "center",
  },
]);

table.push([
  {
    content: chalk.bold.bgCyan.black("🛖 Base"),
    hAlign: "center",
    vAlign: "center",
  },
  {
    content: chalk.bold.bgGreen.black("📦 Package"),
    hAlign: "center",
    vAlign: "center",
  },
  {
    content: chalk.bold.bgMagenta.black("🚢 Publish"),
    hAlign: "center",
    vAlign: "center",
  },
]);

sites.sites.apply((siteList) => {
  siteList.forEach((site, index) => {
    const siteBuildSettings = netlify.SiteBuildSettings.get(site.name, site.id);

    const dynamicPropertyValues = Object.fromEntries(
      tableFields
        .filter((field) => !field.isStatic)
        .map((field) => [field.key, (siteBuildSettings as any)[field.key]]),
    );

    pulumi.all(dynamicPropertyValues).apply((siteSettings) => {
      const emoji = Object.keys(emojiMap).find((key) => site.name.includes(key))
        ? emojiMap[
            Object.keys(emojiMap).find((key) => site.name.includes(key))!
          ]
        : "🌐";

      table.push([
        {
          content: `${emoji} ${chalk.bold.underline.yellow(site.customDomain)}`,
        },
        {
          content: chalk.blueBright(siteSettings.baseDirectory ?? "N/A"),
        },
        {
          content: chalk.greenBright(siteSettings.packageDirectory ?? "N/A"),
        },
        {
          content: chalk.magentaBright(siteSettings.publishDirectory ?? "N/A"),
        },
        {
          content: chalk.white(`'${site.id}'`),
        },
      ]);

      if (table.length === siteList.length + 2) {
        table.sort((a, b) => (a, b));
        console.log(table.sort().toString());
      }
    });
  });
});
