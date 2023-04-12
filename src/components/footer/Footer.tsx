import Link from "next/link";
import styles from "./Footer.module.scss";
import { Inter } from "next/font/google";
import { socialMedia } from "@/constants/socialLinks";
import { pages } from "@/constants/pages";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer + " " + inter.className}>
      <div className="full-w">
        <div className={"flex jc-sb ai-center " + styles.pages}>
          <ul>
            {pages.map((page) => (
              <li key={page.id}>
                <Link
                  href={page.link}
                  target={page.name === "CV" ? "_blank" : "_self"}
                  id={page.id}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {socialMedia.map((social) => (
              <li key={social.id}>
                <Link href={social.link} target="_blank" id={social.id}>
                  {social.name}
                </Link>
              </li>
            ))}
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
