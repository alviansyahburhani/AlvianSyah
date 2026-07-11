import Image from "next/image";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import ClientHub from "@/components/ClientHub";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section with its own background */}
      <section className={styles.heroSection} id="home">
        <Image
          id="hero-bg"
          src="/images/image.jpeg"
          alt="Forest Adventure Background"
          fill
          className={styles.heroBg}
          priority
        />
        <Hero />
      </section>

      {/* About Me Section with its own background */}
      <section className={styles.aboutSection}>
        <AboutMe />
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techSection}>
        <TechStack />
      </section>

      {/* Client Acquisition Hub (Tabs: Services, Projects, Why Me) */}
      <section className={styles.projectsSection}>
        <ClientHub />
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <Contact />
      </section>
    </main>
  );
}
