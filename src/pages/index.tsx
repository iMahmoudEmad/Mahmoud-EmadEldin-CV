import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authorYearBorn = 1996;
  const authorAge = new Date().getFullYear() - authorYearBorn;

  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <div className={styles.content}>
          <div className={styles.personImage}>
            <Image
              src="/assets/images/avatar.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

          <div className={styles.personInfo}>
            <h2 className={"bold " + styles.pageTitle}>Hello!</h2>

            <div className={"flex jc-sb ai-center " + styles.description}>
              <p>
                I'm <span className="bold">Mahmoud</span>, a{" "}
                <span className="bold">Frontend engineer</span> based in Egypt,
                who enjoys building things that live on the internet.
              </p>
              <p>
                I’m passionate about making{" "}
                <span className="bold">scalable</span>,{" "}
                <span className="bold">maintainable</span>,{" "}
                <span className="bold">cutting-edge</span>
                web apps and <span className="bold">pixel-perfect</span> user
                interfaces that create enjoyable experiences for the users. I
                like working on interesting and challenging products that have a
                good impact and make the users life easier.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
