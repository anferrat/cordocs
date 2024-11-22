import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Corpad documentation</span>,
  project: {
    link: "https://github.com/anferrat/cordocs",
  },
  docsRepositoryBase: "https://github.com/anferrat/cordocs",
  footer: {
    text: "Corpad, 2024. Created by Andrei Lomtev",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  defaultSEO: {
      title: "Corpad Docs",
      titleTemplate: '%s | Corapd Docs',
  },
};

export default config;
