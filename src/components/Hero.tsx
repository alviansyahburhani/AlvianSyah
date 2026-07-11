"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const icons = {
  ig: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z" fill="currentColor" />
    </svg>
  ),
  gh: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" fill="currentColor" />
    </svg>
  ),
  li: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fill="currentColor" />
    </svg>
  ),
  tk: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4381 2.01667C13.5298 2 14.6131 2.00833 15.6964 2C15.7631 3.27498 16.2214 4.57497 17.1548 5.47496C18.0881 6.39995 19.4047 6.82494 20.688 6.9666V10.3249C19.488 10.2832 18.2797 10.0332 17.1881 9.51656C16.7131 9.29991 16.2714 9.02491 15.8381 8.74157C15.8298 11.1749 15.8464 13.6082 15.8214 16.0332C15.7548 17.1998 15.3714 18.3581 14.6964 19.3164C13.6048 20.9164 11.7131 21.9581 9.7715 21.9914C8.57986 22.0581 7.38819 21.7331 6.37154 21.1331C4.68823 20.1414 3.50492 18.3248 3.32992 16.3748C3.31325 15.9582 3.30492 15.5415 3.32158 15.1332C3.47158 13.5499 4.25491 12.0332 5.47156 10.9999C6.85488 9.7999 8.78817 9.22491 10.5965 9.56656C10.6131 10.7999 10.5631 12.0332 10.5631 13.2665C9.73816 12.9999 8.77151 13.0749 8.04652 13.5749C7.52153 13.9165 7.12154 14.4415 6.91319 15.0332C6.7382 15.4582 6.7882 15.9248 6.79654 16.3748C6.99654 17.7415 8.31318 18.8914 9.71316 18.7665C10.6465 18.7581 11.5381 18.2165 12.0215 17.4248C12.1798 17.1498 12.3548 16.8665 12.3631 16.5415C12.4465 15.0498 12.4131 13.5665 12.4215 12.0749C12.4298 8.71657 12.4131 5.36661 12.4381 2.01667Z" fill="currentColor" />
    </svg>
  )
};

const socialData = {
  ig: {
    name: 'Instagram',
    desc: 'See my latest photo collections on Instagram.',
    icon: icons.ig,
    url: 'https://www.instagram.com/alvianburhani/' // Ganti dengan link IG Anda
  },
  li: {
    name: 'LinkedIn',
    desc: 'Connect with me professionally on LinkedIn.',
    icon: icons.li,
    url: 'https://www.linkedin.com/in/alvian-syah-burhani' // Ganti dengan link LinkedIn Anda
  },
  gh: {
    name: 'GitHub',
    desc: 'Check out my open source projects on GitHub.',
    icon: icons.gh,
    url: 'https://github.com/alviansyahburhani' // Ganti dengan link GitHub Anda
  },
  tk: {
    name: 'TikTok',
    desc: 'Watch my short form videos on TikTok.',
    icon: icons.tk,
    url: 'https://www.tiktok.com/@alpiangg_' // Ganti dengan link TikTok Anda
  }
};

type SocialKey = keyof typeof socialData;
const socialKeys = Object.keys(socialData) as SocialKey[];

const statSlides = [
  {
    value: '1+',
    label: 'YEARS EXPERIENCE',
    sub: 'Web Developer',
    boxes: [
      { label: 'PROJECTS', value: '5+' },
      { label: 'CLIENTS', value: '2+' },
      { label: 'COMPANIES', value: '2+' },
    ],
  },
  {
    value: '10+',
    label: 'PROJECTS SHIPPED',
    sub: 'Web & Machine Learning',
    boxes: [
      { label: 'WEB STACK', value: 'Next.js' },
      { label: 'ML STACK', value: 'Python' },
    ],
  },
  {
    value: 'AI',
    label: 'AGENTIC WEB BUILDER',
    sub: 'Pembuatan Website for Agentic AI',
    boxes: [
      { label: 'INTEGRATION', value: 'AI Agents' },
      { label: 'FOCUS', value: 'Automation' },
    ],
  },
  {
    value: '98%',
    label: 'CLIENT SATISFACTION',
    sub: 'Based on past feedback',
    boxes: [
      { label: 'RESPONSE', value: '<24H' },
      { label: 'REMOTE', value: 'YES' },
    ],
  },
];

export default function Hero() {
  const [activeSocial, setActiveSocial] = useState<SocialKey>('ig');
  const [activeStat, setActiveStat] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to([text1Ref.current, text2Ref.current], {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      }
    });

    gsap.to('.gsap-stagger-item', {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2, // Sedikit jeda agar tipografi mulai muncul lebih dulu
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      }
    });

    gsap.to('.gsap-green-block', {
      scaleY: 1,
      duration: 1,
      ease: 'power4.out',
      delay: 0.6,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      }
    });

    const bgImage = document.getElementById('hero-bg');
    if (bgImage) {
      gsap.fromTo(bgImage, 
        { scale: 1.05 },
        { scale: 1, duration: 2, ease: 'power2.out' }
      );
      gsap.to(bgImage, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  }, { scope: heroRef });

  const activeIndex = socialKeys.indexOf(activeSocial);
  const prevIndex = (activeIndex - 1 + socialKeys.length) % socialKeys.length;
  const nextIndex = (activeIndex + 1) % socialKeys.length;

  const visibleSocials = [
    socialKeys[prevIndex],
    socialKeys[activeIndex],
    socialKeys[nextIndex]
  ];

  const handleNextSocial = () => setActiveSocial(socialKeys[nextIndex]);
  const handlePrevSocial = () => setActiveSocial(socialKeys[prevIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat(prev => (prev + 1) % statSlides.length);
    }, 4000); // Ganti tiap 4 detik
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle untuk sidebar social media
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSocial(prevActive => {
        const currentIndex = socialKeys.indexOf(prevActive);
        const nextIndex = (currentIndex + 1) % socialKeys.length;
        return socialKeys[nextIndex];
      });
    }, 5000); // Ganti tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  const currentStat = statSlides[activeStat];

  return (
    <div id="home" className={styles.heroContainer} ref={heroRef}>
      <main className={styles.mainContent}>

        <div className={styles.typography} ref={parallaxRef}>
          <div style={{ overflow: 'hidden' }}>
            <h1 className={styles.titleOutline} ref={text1Ref} style={{ opacity: 0, transform: 'translateY(120%)' }}>
              AL<span className={styles.textAccent}>VIAN</span>
            </h1>
          </div>
          <div style={{ overflow: 'hidden', paddingBottom: '10px' }}>
            <h2 className={styles.subtitleSolid} ref={text2Ref} style={{ opacity: 0, transform: 'translateY(120%)' }}>
              SYAH BURHANI
            </h2>
          </div>
        </div>

        {/* Right Widget: status + rotating stats */}
        <div className={styles.weatherWidget}>

          {/* status badge - persisten, tidak ikut carousel */}
          <div className={`${styles.statusBadge} gsap-stagger-item`}>
            <span className={styles.statusDot}></span>
            AVAILABLE FOR WORK
          </div>

          <div className={`${styles.pageNumber} gsap-stagger-item`}>
            {String(activeStat + 1).padStart(2, '0')}/{String(statSlides.length).padStart(2, '0')}
          </div>

          <div className={`${styles.temperature} gsap-stagger-item`}>{currentStat.value}</div>

          <div className={`${styles.dateBlock} gsap-stagger-item`}>
            <div className={styles.date}>{currentStat.label}</div>
            <div className={styles.day}>{currentStat.sub}</div>
          </div>

          <div className={`${styles.dataModules} gsap-stagger-item`}>
            {currentStat.boxes.map(box => (
              <div className={styles.dataBox} key={box.label}>
                <span className={styles.dataLabel}>{box.label}</span>
                <span className={styles.dataValue}>{box.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.bottomControls}>

            <div className={`${styles.navigationControls} gsap-stagger-item`}>
              <div className={styles.paginationDots}>
                {statSlides.map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.dot} ${i === activeStat ? styles.activeDot : ''}`}
                    onClick={() => setActiveStat(i)}
                  ></span>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={`${styles.sidebarNav} gsap-stagger-item`}>
                <div className={styles.socialLine}></div>
                <div className={styles.socialIcons}>
                  <button type="button" className={styles.scrollArrow} onClick={handlePrevSocial} aria-label="Previous Social">
                    &#9650;
                  </button>
                  {visibleSocials.map(key => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveSocial(key)}
                      aria-label={`View ${key} social link`}
                      className={`${styles.iconCircle} ${activeSocial === key ? styles.activeIcon : ''}`}
                    >
                      {socialData[key].icon ? React.cloneElement(socialData[key].icon, { width: '20', height: '20' }) : key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                  <button type="button" className={styles.scrollArrow} onClick={handleNextSocial} aria-label="Next Social">
                    &#9660;
                  </button>
                </div>
                <div className={styles.socialLine}></div>
              </div>

              <div className={`${styles.greenBlock} gsap-green-block`}>
                <a
                  href={socialData[activeSocial].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialContent}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <h3 className={styles.socialTitle}>
                    {socialData[activeSocial].name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', opacity: 0.7 }}>
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </h3>
                  <p className={styles.socialDesc}>{socialData[activeSocial].desc}</p>
                </a>
              </div>
            </aside>
          </div>

        </div>

      </main>
    </div>
  );
}