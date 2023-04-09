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
    link: "https://twitter.com/imahmoudemad",
    isIconShown: true,
  },
  {
    name: "linkedIn",
    id: "linkedIn",
    link: "https://www.linkedin.com/in/imahmoudemad",
    isIconShown: true,
  },
  {
    name: "github",
    id: "github",
    link: "https://github.com/iMahmoudEmad",
    isIconShown: true,
  },
];
