import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { SiteHead } from "@/components/SiteHead";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SiteHead />
      <Navbar />

      <main className={"main full-w " + inter.className}>
        <img src="https://joebell.co.uk/_image?q=80&f=webp&w=916&h=1328&href=%2Fassets%2Fimage%2Fprofile.jpg" alt="" />
      </main>

      <Footer />
    </>
  );
}
