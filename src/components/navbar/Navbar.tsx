import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Inter } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { SiDocsdotrs } from "react-icons/si";
import { AiOutlineCodeSandbox, AiOutlineHome } from "react-icons/ai";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { MdWorkspaces } from "react-icons/md";
import { socialMedia } from "@/constants/socialLinks";
import { pages } from "@/constants/pages";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  function setColor() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  }

  useEffect(() => {
    const matchMedia: any = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    let localTheme: any = window.localStorage.getItem("theme");

    localTheme ? setTheme(localTheme) : setTheme(matchMedia);
    document.documentElement.className = localTheme || matchMedia;
  }, []);

  return (
    <header className={styles.navbar + " " + inter.className}>
      <nav>
        <div className={styles.content + " full-w"}>
          <h1 className={styles.title}>
            <Link href="/">Mahmoud Emad</Link>
          </h1>

          <div className="flex ai-center">
            <ul
              className={styles.pages + " " + styles.listNav + " " + styles.me2}
            >
              {pages.slice(1, 3).map((page) => (
                <li
                  className={styles.pageName + " " + styles.list}
                  key={page.id}
                >
                  <Link href={page.link} id={"desktop-page-" + page.id}>
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

            <div className={styles.navListBottom}>
              <ul className={styles.pages + " " + styles.mobileList}>
                {pages.map((page) => (
                  <li className={styles.list} key={page.id}>
                    <Link href={page.link} id={"nav-" + page.id}>
                      <span className={styles.listIcon}>
                        {page.name === "home" && <AiOutlineHome />}
                        {page.name === "skills" && <AiOutlineCodeSandbox />}
                        {page.name === "experience" && <MdWorkspaces />}
                        {page.name === "CV" && <HiOutlineClipboardDocument />}
                      </span>
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
