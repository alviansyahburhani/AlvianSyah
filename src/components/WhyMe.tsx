"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './WhyMe.module.css';

const reasons = [
  {
    id: 1,
    title: "Tampilan Menarik & Profesional",
    desc: "Website Anda akan dibuat rapi, modern, dan tidak terlihat murahan. Tampilan yang bagus akan membuat pelanggan makin percaya dengan bisnis Anda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Lancar & Rapi Dibuka di HP",
    desc: "Sebagian besar orang membuka website lewat HP. Saya pastikan website Anda tampil sempurna dan tidak berantakan saat dibuka di layar kecil.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 3,
    title: "Harga Bersahabat & Transparan",
    desc: "Mendapatkan website bagus tidak harus mahal. Anda akan mendapatkan harga yang masuk akal, sesuai anggaran, tanpa biaya siluman.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    )
  },
  {
    id: 4,
    title: "Selesai Tepat Waktu",
    desc: "Saya sangat menghargai waktu Anda. Proses pembuatan website akan selesai sesuai dengan jadwal yang disepakati bersama di awal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    id: 5,
    title: "Bebas Pusing & Mudah Digunakan",
    desc: "Anda tidak perlu paham hal teknis yang rumit. Website dibuat agar mudah dikelola, dan saya akan ajarkan cara pakainya dengan bahasa sederhana.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    id: 6,
    title: "Komunikasi Lancar & Terbuka",
    desc: "Jangan ragu bertanya! Saya mengutamakan komunikasi yang santai, cepat tanggap, dan siap mendengarkan apa yang sebenarnya Anda butuhkan.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 7,
    title: "Garansi & Bantuan Purna Jual",
    desc: "Proyek selesai bukan berarti saya lepas tangan. Jika ada kendala atau kebingungan setelah website diluncurkan, saya siap membantu.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  }
];

export default function WhyMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Efek Kartu Berbaris Tumbuh (Staggered Pop & Bounce)
    gsap.from('.gsap-why-card', {
      scale: 0.5,
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.5)',
      clearProps: 'all', // Penting: agar efek hover CSS tetap berjalan normal setelah animasi
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none' // Muncul sekali saat di-scroll
      }
    });
  }, { scope: sectionRef });

  // 3D Card Parallax Tilt Effect
  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to(card, {
      y: -8, // Mengangkat kartu
      rotationY: xNorm * 10, // Miring ke kiri/kanan maksimal 10 derajat
      rotationX: -yNorm * 10, // Miring ke atas/bawah
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)',
      clearProps: 'transform' // Bersihkan inline transform agar transisi dasar kembali normal
    });
  };

  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>
            Mengapa Memilih <span className={styles.highlight}>Saya?</span>
          </h2>
          <p className={styles.subtitle}>
            Dedikasi untuk memberikan hasil terbaik, transparan, dan tanpa pusing.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div 
              key={reason.id} 
              className={`${styles.reasonCard} gsap-why-card`}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <div className={styles.iconContainer}>
                {reason.icon}
              </div>
              <div className={styles.reasonText}>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDesc}>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}