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
    name: "skills",
    id: "skills",
    link: "skills",
  },
  {
    name: "experience",
    id: "experience",
    link: "experience",
  },
  {
    name: "projects",
    id: "projects",
    link: "projects",
  },
  {
    name: "CV",
    id: "cv",
    link: "cv",
  },
];
