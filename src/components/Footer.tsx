"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const handleTabSwitch = (hash: string) => {
    window.dispatchEvent(new CustomEvent('switchTab', { detail: hash }));
  };

  const handleOpenAbout = (tab: string) => {
    window.dispatchEvent(new CustomEvent('openAboutModal', { detail: tab }));
  };

  useGSAP(() => {
    // 1. Link Columns Stagger Reveal
    gsap.from('.gsap-link-col', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 2. Huge Logo Cinematic Reveal
    gsap.fromTo('.gsap-huge-logo',
      { y: 150, opacity: 0, scale: 0.9, transformOrigin: 'bottom center' },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    // 3. Right Sidebar Items Reveal
    gsap.from('.gsap-sidebar-item', {
      x: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse'
      }
    });
  }, { scope: footerRef });

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.mainWrapper}>

        {/* LEFT COLUMN: Links Grid + Huge Logo */}
        <div className={styles.leftColumn}>
          <div className={styles.linksGrid}>
            {/* Quick Links */}
            <div className={`${styles.linkGroup} gsap-link-col`}>
              <h3 className={styles.groupTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                <li><a href="#about" onClick={() => handleOpenAbout('education')} className={styles.link}>Education</a></li>
                <li><a href="#about" onClick={() => handleOpenAbout('experience')} className={styles.link}>Experience</a></li>
                <li><a href="#about" onClick={() => handleOpenAbout('certificates')} className={styles.link}>Certificate</a></li>
                <li>
                  <a href="/CV-Alvian-Syah-Burhani.pdf" download="CV-Alvian-Syah-Burhani.pdf" className={styles.link}>
                    Download CV
                  </a>
                </li>
                <li><Link href="#contact" className={styles.link}>Contact</Link></li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className={`${styles.linkGroup} gsap-link-col`}>
              <h3 className={styles.groupTitle}>Tech Stack</h3>
              <ul className={styles.linkList}>
                <li><Link href="#tech-stack" onClick={() => handleTabSwitch('frontend')} className={styles.link}>Frontend</Link></li>
                <li><Link href="#tech-stack" onClick={() => handleTabSwitch('backend')} className={styles.link}>Backend</Link></li>
                <li><Link href="#tech-stack" onClick={() => handleTabSwitch('ml')} className={styles.link}>Machine Learning</Link></li>
                <li><Link href="#tech-stack" onClick={() => handleTabSwitch('tools')} className={styles.link}>Tools</Link></li>
              </ul>
            </div>

            {/* Expertise */}
            <div className={`${styles.linkGroup} gsap-link-col`}>
              <h3 className={styles.groupTitle}>Expertise</h3>
              <ul className={styles.linkList}>
                <li><Link href="#client-hub" onClick={() => handleTabSwitch('services')} className={styles.link}>My Services</Link></li>
                <li><Link href="#client-hub" onClick={() => handleTabSwitch('projects')} className={styles.link}>Project</Link></li>
                <li><Link href="#client-hub" onClick={() => handleTabSwitch('whyMe')} className={styles.link}>Why Me?</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.bottomLeft}>
            <div style={{ overflow: 'hidden' }}>
              <h1 className={`${styles.hugeLogoText} gsap-huge-logo`}>ALVIAN <span className={styles.copyrightSymbol}>&copy;</span></h1>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Sidebar */}
        <div className={styles.rightColumn}>
          <div className={`${styles.brandBadge} gsap-sidebar-item`}>
            <span className={styles.pulseDot}></span>
            Available for New Projects
          </div>

          <div className={`${styles.socials} gsap-sidebar-item`}>
            <a href="#" className={styles.socialIcon} aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className={styles.socialText}>GitHub</span>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className={styles.socialText}>LinkedIn</span>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className={styles.socialText}>Instagram</span>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4381 2.01667C13.5298 2 14.6131 2.00833 15.6964 2C15.7631 3.27498 16.2214 4.57497 17.1548 5.47496C18.0881 6.39995 19.4047 6.82494 20.688 6.9666V10.3249C19.488 10.2832 18.2797 10.0332 17.1881 9.51656C16.7131 9.29991 16.2714 9.02491 15.8381 8.74157C15.8298 11.1749 15.8464 13.6082 15.8214 16.0332C15.7548 17.1998 15.3714 18.3581 14.6964 19.3164C13.6048 20.9164 11.7131 21.9581 9.7715 21.9914C8.57986 22.0581 7.38819 21.7331 6.37154 21.1331C4.68823 20.1414 3.50492 18.3248 3.32992 16.3748C3.31325 15.9582 3.30492 15.5415 3.32158 15.1332C3.47158 13.5499 4.25491 12.0332 5.47156 10.9999C6.85488 9.7999 8.78817 9.22491 10.5965 9.56656C10.6131 10.7999 10.5631 12.0332 10.5631 13.2665C9.73816 12.9999 8.77151 13.0749 8.04652 13.5749C7.52153 13.9165 7.12154 14.4415 6.91319 15.0332C6.7382 15.4582 6.7882 15.9248 6.79654 16.3748C6.99654 17.7415 8.31318 18.8914 9.71316 18.7665C10.6465 18.7581 11.5381 18.2165 12.0215 17.4248C12.1798 17.1498 12.3548 16.8665 12.3631 16.5415C12.4465 15.0498 12.4131 13.5665 12.4215 12.0749C12.4298 8.71657 12.4131 5.36661 12.4381 2.01667Z" fill="currentColor" /></svg>
              <span className={styles.socialText}>TikTok</span>
            </a>
          </div>

          <div className={`${styles.copyrightContainer} gsap-sidebar-item`}>
            <div className={styles.legalLinks}>
              <Link href="#">Terms & Conditions</Link>
              <span className={styles.separator}>|</span>
              <Link href="#">Privacy Policy</Link>
              <span className={styles.separator}>|</span>
              <Link href="#">Disclosures</Link>
            </div>
            <div className={styles.copyrightRow}>
              <p>&copy; {new Date().getFullYear()} All rights Reserved.</p>
              <button
                className={styles.backToTopBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15l7-7 7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
