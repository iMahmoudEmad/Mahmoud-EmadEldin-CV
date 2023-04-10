import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../../styles/Experience.module.scss";
import { experiences } from "@/constants/experience";
const inter = Inter({ subsets: ["latin"] });
import { v4 } from "uuid";

export default function Home() {
  const authorYearBorn = 1996;
  const authorAge = new Date().getFullYear() - authorYearBorn;

  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <div className={styles.content}>
            {experiences.map((experience) =>
                <div className={'flex ai-center ' + styles.experience} key={v4()}>
                  <div className={styles.start}>
                    {experience.from}
                    <span> — </span>
                    {experience.to}
                  </div>
                  <div className={styles.end}>
                    {experience.company.name}
                  </div>
                </div>
            )}
        </div>
      </main>

      <Footer />
    </>
  );
}
