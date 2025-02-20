import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Acceuil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Programmes",
    path: "/programmes",
    newTab: false,
  },
  {
    id: 33,
    title: "Recherche",
    path: "/recherche",
    newTab: false,
  },
  {
    id: 4,
    title: "Bibliothèque",
    newTab: false,
    submenu: [
      {
        id: 42,
        title: "Ouvrages",
        path: "/blog",
        newTab: false,
      },
      {
        id: 43,
        title: "Publications",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Mémoires",
        path: "/blog",
        newTab: false,
      },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 41,
    title: "Notre Institut",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
