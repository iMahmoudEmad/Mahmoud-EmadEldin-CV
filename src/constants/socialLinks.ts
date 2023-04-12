interface SocialMediaI {
  name: string;
  id: string;
  link: string;
  isIconShown: boolean;
}

export const socialMedia: SocialMediaI[] = [
  {
    name: "twitter",
    id: "twitter",
    link: "/twitter",
    isIconShown: true,
  },
  {
    name: "linkedIn",
    id: "linkedIn",
    link: "/linkedin",
    isIconShown: true,
  },
  {
    name: "github",
    id: "github",
    link: "/github",
    isIconShown: true,
  },
];
