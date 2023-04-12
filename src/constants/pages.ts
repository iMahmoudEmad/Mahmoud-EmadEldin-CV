interface PagesI {
  name: string;
  id: string;
  link: string;
}

export const pages: PagesI[] = [
  {
    name: "home",
    id: "home",
    link: "/",
  },
  {
    name: "experience",
    id: "experience",
    link: "experience",
  },
  {
    name: "skills",
    id: "skills",
    link: "skills",
  },
  // {
  //   name: "projects",
  //   id: "projects",
  //   link: "projects",
  // },
  {
    name: "CV",
    id: "cv",
    link: "cv",
  },
];
