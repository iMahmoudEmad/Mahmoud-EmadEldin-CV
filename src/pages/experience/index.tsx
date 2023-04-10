import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";
import styles from "../styles/Experience.module.scss";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authorYearBorn = 1996;
  const authorAge = new Date().getFullYear() - authorYearBorn;

  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        asd
      </main>

      <Footer />
    </>
  );
}
