import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Документация",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Начало работы",
      items: [
        {
          title: "Вступление",
          href: "/docs",
          items: [],
        },
        {
          title: "Установка",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Документация",
          href: "/docs/documentation",
          items: [],
        },
        {
          title: "Блоки кода",
          href: "/docs/documentation/code-blocks",
          items: [],
        },
        {
          title: "Руководство по стилю",
          href: "/docs/documentation/style-guide",
          items: [],
        },
      ],
    },
    {
      title: "Компоненты",
      items: [
        {
          title: "Компоненты",
          href: "/docs/documentation/components",
          items: [],
        },
      ],
    },
  ],
};
