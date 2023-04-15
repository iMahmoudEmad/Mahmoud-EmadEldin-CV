import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <div className={styles.content}>
            <Image
            className={styles.personImage}
              src={"/assets/images/mahmoud.jpg"}
              alt="Picture of the author"
              width={500}
              height={500}
            />

          <div className={styles.personInfo}>
            <h2 className={"bold " + styles.pageTitle}>Hello!</h2>

            <div className={"flex jc-sb ai-center " + styles.description}>
              <p>
                I&apos;m <span className="bold">Mahmoud</span>, a
                <span className="bold"> Frontend engineer</span> based in Egypt,
                who enjoys building things that live on the internet.
              </p>
              <p>
                I&apos;m passionate about making
                <span className="bold"> scalable</span>,
                <span className="bold"> maintainable</span>,
                <span className="bold"> cutting-edge </span>
                web apps and <span className="bold">pixel-perfect</span> user
                interfaces that create enjoyable user experiences. I
                like working on interesting and challenging products that have a
                good impact and make the user&apos;s life easier.
              </p>
            </div>

            <div className={styles.cv}>
              <Link href="/cv">
                <span className={styles.underlineOffset}>
                  Open to work from now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
