import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Inter } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { SiDocsdotrs } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { socialMedia } from "@/constants/socialLinks";
import { pages } from "@/constants/pages";

const inter = Inter({ subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav className={styles.navbar + " " + inter.className}>
      <div className={styles.content + " full-w"}>
        <h1 className={styles.title}>
          <Link href="/">Mahmoud Emad</Link>
        </h1>

        <ul className={styles.pages}>
          {pages.slice(1, 4).map((page) => (
            <li className={styles.pageName + " " + styles.list} key={page.id}>
              <Link href={page.link} id={page.id}>
                <span className={styles.listIcon}>
                  {page.name === "skills" && <AiOutlineCodeSandbox />}
                  {page.name === "experience" && <MdWorkspaces />}
                  {page.name === "projects" && <SiDocsdotrs />}
                </span>
                {page.name}
              </Link>
            </li>
          ))}

          {socialMedia.map((social) => (
            <li className={styles.list} key={social.id}>
              <Link href={social.link} target="_blank" id={social.id}>
                <span className={styles.listIcon}>
                  {social.name === "twitter" && <FiTwitter />}
                  {social.name === "linkedIn" && <FaLinkedin />}
                  {social.name === "github" && <BsGithub />}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
