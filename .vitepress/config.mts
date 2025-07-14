import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "十四洲",
  description: "十四洲入门指引",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "指南", link: "/guide/environment-preparation" }],

    sidebar: {
      "/guide": {
        base: "/guide/",
        items: [
          {
            text: "快速入门",
            items: [{ text: "环境准备", link: "environment-preparation" }],
          },
          {
            text: "大爱仙尊",
            base: "/guide/love/",
            items: [{ text: "环境准备", link: "environment-preparation" }],
          },
        ],
      },
      "/reference": {
        base: "/reference/",
        items: [{ text: "后端教程", link: "backend-development" }],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  base: "/celestial-archipelago-doc/",
});
