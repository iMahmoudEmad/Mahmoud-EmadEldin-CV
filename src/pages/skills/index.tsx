import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../../styles/Skills.module.scss";
import { skills } from "@/constants/skills";
const inter = Inter({ subsets: ["latin"] });
import { v4 } from "uuid";

export default function Home() {
  function copyToClipboard(event: any) {
    navigator.clipboard.writeText(event.target.innerText);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") copyToClipboard(event);
  };

  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <ul className="flex ai-center">
          {skills.map((skill, idx) => (
            <li
              id={"skill-" + idx}
              className={styles.skill}
              key={v4()}
              title="Click to copy"
              onClick={copyToClipboard}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
            >
              {skill}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
