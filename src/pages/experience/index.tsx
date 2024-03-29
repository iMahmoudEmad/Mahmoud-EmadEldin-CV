import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../../styles/Experience.module.scss";
import { experiences } from "@/constants/experience";
const inter = Inter({ subsets: ["latin"] });
import { v4 } from "uuid";
import Link from "next/link";

export default function Home() {
  const authorYearBorn = 1996;

  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <div className={styles.content}>
          {experiences.map((experience) => (
            <div className={"flex " + styles.experience} key={v4()}>
              <div className={styles.start}>
                <span className={styles.from}>{experience.from}</span>
                <span className={styles.space}>-</span>
                <span>{experience.to}</span>
              </div>
              <div className={styles.end}>
                <Link href={experience.company.link || "#"}>
                  {experience.role} at {experience.company.name}
                </Link>

                <span className={styles.role}>{experience.contract}</span>

                <ul className={styles.responsibilities}>
                  {experience.responsibilities.map((responsability) => (
                    <div
                      key={v4()}
                      className={"flex ai-center " + styles.responsability}
                    >
                      <span className={styles.dash}>-</span>
                      <li className={styles.responsabilityContent}>
                        <span>{responsability}.</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
