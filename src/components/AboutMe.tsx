"use client";
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutMe.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'education' | 'certificates' | 'experience'>('about');

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);

  // Event listener untuk membuka modal dari tombol eksternal (misal: Footer)
  useEffect(() => {
    const handleOpenModal = (e: CustomEvent) => {
      const newTab = e.detail;
      if (['about', 'education', 'certificates', 'experience'].includes(newTab)) {
        setActiveTab(newTab as 'about' | 'education' | 'certificates' | 'experience');
        setIsModalOpen(true);
      }
    };

    window.addEventListener('openAboutModal', handleOpenModal as EventListener);
    return () => window.removeEventListener('openAboutModal', handleOpenModal as EventListener);
  }, []);

  // Data Dummy untuk Modal
  const educationData = [
    {
      year: "2022 - 2026",
      degree: "S1 Teknik Informatika",
      school: "Universitas Muhammadiyah Makassar",
      desc: "Berfokus pada pengembangan website dan machine learning."
    },
    {
      year: "2019 - 2022",
      degree: "Ilmu Pengetahuan Sosial (IPS)",
      school: "SMAN 1 Watansoppeng",
      desc: "Fokus pada studi sosial dan kemasyarakatan, serta aktif mengikuti kegiatan sekolah."
    },
    {
      year: "2016 - 2019",
      degree: "Sekolah Menengah Pertama",
      school: "SMP Negeri 2 Watansoppeng",
      desc: "Aktif dalam kegiatan ekstrakurikuler kepanduan. Dipercaya menjabat sebagai Ketua Pramuka periode 2017-2018."
    },
    {
      year: "2010 - 2016",
      degree: "Sekolah Dasar",
      school: "SD Negeri 3 Lemba",
      desc: "Menyelesaikan pendidikan dasar."
    },
    {
      year: "2009 - 2010",
      degree: "Taman Kanak-Kanak",
      school: "TK Aisyiyah Sewo",
      desc: "Menyelesaikan pendidikan anak usia dini."
    }
  ];

  const certificatesData = [
    {
      year: "2025",
      name: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      image: "/images/certificates/CybersecurityEssentialsForCisco.webp",
      file: "/certificates/Cybersecurity Essentials For Cisco.pdf"
    },
    {
      year: "2025",
      name: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      image: "/images/certificates/IntroductiontoDataScienceforCisco.webp",
      file: "/certificates/Introduction to Data Science for Cisco.pdf"
    },
    {
      year: "2025",
      name: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      image: "/images/certificates/LinuxUnhatchedForcisco.webp",
      file: "/certificates/Linux Unhatched For cisco.pdf"
    },
    {
      year: "2025",
      name: "Build Your Generative AI Productivity Skills",
      issuer: "LinkedIn Learning & Microsoft",
      image: "/images/certificates/SertifikatLinkedInLearning.webp",
      file: "/certificates/Sertifikat LinkedIn Learning.pdf"
    },
    {
      year: "2024",
      name: "Belajar Dasar AI",
      issuer: "Dicoding",
      image: "/images/certificates/BelajarDasarAIFordicoding.webp",
      file: "/certificates/Belajar Dasar AI For dicoding.pdf"
    },
    {
      year: "2024",
      name: "Next.js Essentials and Advanced Web Development",
      issuer: "Informatics Laboratory, Univ. Muhammadiyah Makassar",
      image: "/images/certificates/Next.jsEssentialsandadvancewebdevelopmentforlabs.webp",
      file: "/certificates/Next.js Essentials and advance web development for labs.pdf"
    },
    {
      year: "-",
      name: "Nest.js, Docker, and Advanced API Architectures",
      issuer: "Informatics Laboratory, Univ. Muhammadiyah Makassar",
      image: "/images/certificates/Nest.js,Docker,andadvanceAPIarchtecturForlabs.webp",
      file: "/certificates/Nest.js, Docker, and advance API archtectur For labs.pdf"
    }
  ];

  const experienceData = [
    { period: "Juni 2026 - Sekarang", role: "Frontend Developer (Freelance)", company: "Freelance", desc: "Berfokus pada pengembangan antarmuka web yang modern, responsif, dan berkinerja tinggi." },
    { period: "Januari 2026 - Mei 2026", role: "Peneliti (Tugas Akhir)", company: "Universitas Muhammadiyah Makassar", desc: "Melakukan penelitian studi untuk menyelesaikan kuliah dengan mengambil tema Machine Learning." },
    { period: "Januari 2026 - April 2026", role: "Frontend Developer (Academic Project)", company: "Website Manajemen Toko & POS - Makassar", desc: "Merancang dan mengembangkan aplikasi web Point of Sale (POS) khusus untuk toko bangunan guna mengoptimalkan efisiensi pemrosesan transaksi Invoice dan manajemen inventaris. Membangun antarmuka UI/UX yang responsif menggunakan Next.js dan Tailwind CSS." },
    { period: "November 2025 - Sekarang", role: "Frontend Developer (Freelance Project)", company: "Sisdikop - Makassar", desc: "Merancang arsitektur frontend multi-tenant yang tangguh pada platform SaaS untuk manajemen operasional koperasi yang mandiri. Menerapkan clean code dan prinsip Separation of Concerns (SoC) dengan Next.js dan Tailwind CSS." },
    { period: "November 2025 - Desember 2025", role: "Peserta KKN", company: "Universitas Muhammadiyah Makassar", desc: "Melaksanakan program Kuliah Kerja Nyata sebagai bentuk pengabdian kepada masyarakat." },
    { period: "Agustus 2025 - November 2025", role: "Internship", company: "Bosowa Transportation", desc: "Melaksanakan kegiatan magang industri." },
    { period: "2017 - 2018", role: "Ketua Pramuka", company: "SMP Negeri 2 Watansoppeng", desc: "Aktif dalam organisasi kepanduan sekolah dan dipercaya menjabat sebagai Ketua Pramuka." }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  const bioString = "Hi, I'm Alvian. I build fast, scalable web applications with a focus on modern frontend architectures using React and Next.js. I thrive on translating complex requirements into clean, maintainable code that delivers exceptional user experiences.";
  const bioWords = bioString.split(" ");

  useGSAP(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' }
      );
    }
  }, { dependencies: [isModalOpen] });

  useGSAP(() => {
    if (isModalOpen && tabContentRef.current) {
      gsap.fromTo(tabContentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, { dependencies: [activeTab, isModalOpen], scope: tabContentRef });

  useGSAP(() => {
    // 1. Tipografi Reveal
    gsap.to('.gsap-about-text', {
      y: '0%',
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 2. Typing Effect (Word by Word)
    gsap.to('.gsap-bio-word', {
      opacity: 1,
      duration: 0.1,
      stagger: 0.05,
      delay: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 2b. Buttons Pop-in
    gsap.to('.gsap-btn', {
      scale: 1,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: 'back.out(1.5)',
      delay: 0.6,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 3. Bento Box (Bouncing / Meloncat)
    gsap.to('.gsap-bento-box', {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'back.out(1.5)',
      delay: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse'
      }
    });

    // 4. Marquee Scrubbing
    const marquee = document.querySelector('.gsap-marquee');
    if (marquee) {
      gsap.to(marquee, {
        x: '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section className={styles.aboutContainer} id="about" ref={containerRef}>
      <div className={styles.contentGrid}>

        {/* Left Side */}
        <div className={styles.leftSide}>
          <div className={styles.typography}>
            <div style={{ overflow: 'hidden' }}>
              <h2 className={`${styles.titleOutline} gsap-about-text`}>WEB</h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <h2 className={`${styles.titleSolid} gsap-about-text`}>DEVELOPER</h2>
            </div>
          </div>
          <p className={styles.bioText}>
            {bioWords.map((word, i) => (
              <span key={i} className="gsap-bio-word" style={{ opacity: 0 }}>
                {word}{' '}
              </span>
            ))}
          </p>
          <div className={styles.ctaGroup}>
            <a
              href="/CV-Alvian-Syah-Burhani.pdf"
              download="CV-Alvian-Syah-Burhani.pdf"
              className={`${styles.downloadBtn} gsap-btn`}
            >
              Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className={`${styles.ghostBtn} gsap-btn`}
            >
              More About Me &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Bento Grid */}
        <div className={styles.rightSide}>
          <div className={styles.bentoGrid}>

            {/* Box 1: Location Map */}
            <div className={`${styles.bentoBox} ${styles.boxLocation} gsap-bento-box`}>
              <div className={styles.availableHeader}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--box-accent)" stroke="var(--box-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3" fill="#121413"></circle>
                </svg>
                <span className={styles.availableTitle}>Based In</span>
              </div>
              <div className={styles.boxContent}>
                <span className={styles.bentoValue}>Makassar,<br />Sulawesi Selatan, Indonesia</span>
              </div>
            </div>

            {/* Box 2: Availability */}
            <div className={`${styles.bentoBox} ${styles.boxAvailable} gsap-bento-box`}>
              <div className={styles.availableHeader}>
                <div className={styles.statusDotLarge}></div>
                <span className={styles.availableTitle}>Available For</span>
              </div>
              <div className={styles.tagsContainer}>
                <span className={styles.tagSolid}>Fulltime</span>
                <span className={styles.tagSolid}>Freelance</span>
                <span className={styles.tagSolid}>Kontrak</span>
                <span className={styles.tagSolid}>Magang</span>
                <span className={styles.tagOutline}>Remote</span>
                <span className={styles.tagOutline}>Hybrid</span>
                <span className={styles.tagOutline}>On-site</span>
              </div>
            </div>

            {/* Box 3: Role Running Text */}
            <div className={`${styles.bentoBox} ${styles.boxRole} gsap-bento-box`}>
              <div className={styles.boxHeaderCenter}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--box-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className={styles.marqueeContainer}>
                <div className={`${styles.marqueeContent} gsap-marquee`}>
                  <span>FULL-STACK DEVELOPER &nbsp;&bull;&nbsp; MODERN WEB ARCHITECT &nbsp;&bull;&nbsp; </span>
                  <span>FULL-STACK DEVELOPER &nbsp;&bull;&nbsp; MODERN WEB ARCHITECT &nbsp;&bull;&nbsp; </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* MODAL POPUP */}
      {isModalOpen && typeof document !== 'undefined'
        ? createPortal(
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className={styles.modalNav}>
                {['about', 'education', 'certificates', 'experience'].map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className={styles.tabBody} ref={tabContentRef}>
                {activeTab === 'about' && (
                  <div className={styles.tabSection}>
                    <h4>About Me</h4>
                    <p>
                      Saya adalah seorang pengembang web yang sangat antusias dengan teknologi modern.
                      Ketertarikan saya berawal dari rasa ingin tahu bagaimana sebuah website dibangun
                      secara utuh dari sisi visual (Frontend) hingga logika server (Backend).
                    </p>
                    <p>
                      Selain coding, saya juga aktif mengeksplorasi desain UI/UX, karena saya percaya bahwa
                      kode yang hebat harus dipadukan dengan desain yang indah dan mudah digunakan oleh manusia.
                    </p>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className={styles.tabSection}>
                    <h4>Education History</h4>
                    <div className={styles.timeline}>
                      {educationData.map((item, idx) => (
                        <div className={styles.timelineItem} key={idx}>
                          <div className={styles.timelineYear}>{item.year}</div>
                          <div className={styles.timelineContent}>
                            <div className={styles.timelineTitle}>{item.degree}</div>
                            <div className={styles.timelineSubtitle}>{item.school}</div>
                            <p className={styles.timelineDesc}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'certificates' && (
                  <div className={styles.tabSection}>
                    <h4>Certifications</h4>
                    <div className={styles.certGrid}>
                      {certificatesData.map((item, idx) => (
                        <div className={styles.certCard} key={idx}>
                          <div className={styles.certImageWrapper}>
                            {/* Gunakan tag img standar atau Next/Image */}
                            <img src={item.image} alt={item.name} className={styles.certImg} />
                            <div className={styles.certOverlay}>
                              <a href={item.file} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                                View Document
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M15 3h6v6"></path>
                                  <path d="M10 14L21 3"></path>
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className={styles.certInfo}>
                            <div className={styles.itemYear}>{item.year}</div>
                            <div className={styles.itemTitle}>{item.name}</div>
                            <div className={styles.itemSubtitle}>{item.issuer}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className={styles.tabSection}>
                    <h4>Experience</h4>
                    <div className={styles.timeline}>
                      {experienceData.map((item, idx) => (
                        <div className={styles.timelineItem} key={idx}>
                          <div className={styles.timelineYear}>{item.period}</div>
                          <div className={styles.timelineContent}>
                            <div className={styles.timelineTitle}>{item.role}</div>
                            <div className={styles.timelineSubtitle}>{item.company}</div>
                            <p className={styles.timelineDesc}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )
        : null}
    </section>
  );
}
