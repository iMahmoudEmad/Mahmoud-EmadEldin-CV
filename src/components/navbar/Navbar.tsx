import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Inter } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { SiDocsdotrs } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";
import { socialMedia } from "@/constants/socialLinks";
import { pages } from "@/constants/pages";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  function setColor() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  }

  return (
    <header className={styles.navbar + " " + inter.className}>
      <nav>
        <div className={styles.content + " full-w"}>
          <h1 className={styles.title}>
            <Link href="/">Mahmoud Emad</Link>
          </h1>

          <div className="flex ai-center">
            <ul className={styles.pages + " " + styles.me2}>
              {pages.slice(1, 4).map((page) => (
                <li
                  className={styles.pageName + " " + styles.list}
                  key={page.id}
                >
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
            </ul>

            <ul className={styles.pages + " " + styles.me1}>
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
              <li className={styles.list} onClick={setColor}>
                <span className={styles.listIcon}>
                  <MdLightMode />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
