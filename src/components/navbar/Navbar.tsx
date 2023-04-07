import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Inter } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { SiDocsdotrs } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdWorkspaces } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export const Navbar = () => {
  const links = [
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
  ];
  return (
    <nav className={styles.navbar + " " + inter.className}>
      <div className={styles.content + " full-w"}>
        <h1 className={styles.title}>
          <Link href="/">Mahmoud EmadEldin</Link>
        </h1>

        <ul>
          {links.map((link) => (
            <li className={styles.list} key={link.id}>
              <Link href={link.link} id={link.id}>
                <span className={styles.listIcon}>
                  {link.name === "skills" && <AiOutlineCodeSandbox />}
                  {link.name === "experience" && <MdWorkspaces />}
                  {link.name === "projects" && <SiDocsdotrs />}
                </span>
                {link.name}
              </Link>
            </li>
          ))}
          <li className={styles.list}>
            <Link className={styles.icon} href="#" target="_blank" id="twitter">
              <span className={styles.listIcon}>
                <FiTwitter />
              </span>
            </Link>
          </li>
          <li className={styles.list}>
            <Link
              className={styles.icon}
              href="#"
              target="_blank"
              id="linkedin"
            >
              <span className={styles.listIcon}>
                <FaLinkedin />
              </span>
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.icon} href="#" target="_blank" id="github">
              <span className={styles.listIcon}>
                <BsGithub />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
