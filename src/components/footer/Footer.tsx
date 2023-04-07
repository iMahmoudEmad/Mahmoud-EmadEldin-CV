import Link from "next/link";
import styles from "./Footer.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    {
      name: "home",
      link: "/",
      id: "home",
    },
    {
      name: "skills",
      link: "skills",
      id: "skills",
    },
    {
      name: "experience",
      link: "experience",
      id: "experience",
    },
    {
      name: "projects",
      link: "projects",
      id: "projects",
    },
    {
      name: "CV",
      link: "cv",
      id: "cv",
    },
  ];

  return (
    <footer className={styles.footer + " " + inter.className}>
      <div className="full-w">
        <div className={"flex jc-sb ai-center " + styles.pages}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.link} id={link.id}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link href="/">Twitter</Link>
            </li>
            <li>
              <Link href="/">LinkedIn</Link>
            </li>
            <li>
              <Link href="/">Github</Link>
            </li>
          </ul>
        </div>
        <div className={styles.copyrights}>
          <h2 className="text-start">
            © {year}
            <span className={styles.title}>Mahmoud Emad</span>
          </h2>
        </div>
      </div>
    </footer>
  );
};
