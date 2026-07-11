import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

// Lazy load komponen di bawah lipatan (below-the-fold) agar loading awal sangat cepat
const AboutMe = dynamic(() => import("@/components/AboutMe"), { ssr: true });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: true });
const ClientHub = dynamic(() => import("@/components/ClientHub"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection} id="home">
        <Image
          id="hero-bg"
          src="/images/image.jpeg"
          alt="Alvian Syah Burhani Web Developer Portfolio Background"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className={styles.heroBg}
          priority
        />
        <Hero />
      </section>

      <section className={styles.aboutSection}>
        <AboutMe />
      </section>

      <section className={styles.techSection}>
        <TechStack />
      </section>


      <section className={styles.projectsSection}>
        <ClientHub />
      </section>


      <section className={styles.contactSection}>
        <Contact />
      </section>
    </main>
  );
}
