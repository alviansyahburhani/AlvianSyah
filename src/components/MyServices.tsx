"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './MyServices.module.css';

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Membangun aplikasi web yang sangat responsif, cepat, dan terukur dengan framework mengikuti kebutuhan client",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Merancang antarmuka pengguna yang intuitif dan memukau secara visual, dengan fokus pada estetika premium dan kenyamanan pengguna.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Landing Page",
    desc: "Mendesain website satu halaman dengan tingkat konversi tinggi, dirancang khusus untuk menarik calon pelanggan dan memaksimalkan penjualan.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    id: 4,
    title: "Company Profile",
    desc: "Membuat website perusahaan yang profesional untuk menyampaikan identitas merek, visi, dan layanan Anda kepada klien dengan meyakinkan.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: "Wedding Invitation",
    desc: "Merancang undangan pernikahan digital yang elegan dan interaktif, dilengkapi fitur konfirmasi kehadiran (RSVP) dan hitung mundur hari spesial Anda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  },
  {
    id: 6,
    title: "Performance Optimization",
    desc: "Menganalisis dan mengoptimalkan website agar loading lebih cepat, animasi berjalan mulus, dan mendapatkan peringkat SEO yang lebih baik.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
];

export default function MyServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Sync scroll position with activeIndex
  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const cards = scrollElement.querySelectorAll(`.${styles.cardWrapper}`);
      if (cards.length > 0 && cards[activeIndex]) {
        const targetCard = cards[activeIndex] as HTMLElement;
        const scrollLeft = targetCard.offsetLeft - scrollElement.offsetLeft - parseInt(getComputedStyle(scrollElement).paddingLeft || '0');

        isProgrammaticScroll.current = true;
        scrollElement.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });

        // Reset the flag after smooth scroll is likely done
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 600); // 600ms is usually enough for smooth scroll
      }
    }
  }, [activeIndex]);

  // Handle manual scroll to update active dot
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const scrollLeft = scrollElement.scrollLeft;
    const cards = scrollElement.querySelectorAll(`.${styles.cardWrapper}`);

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardEl = card as HTMLElement;
      const cardLeft = cardEl.offsetLeft - scrollElement.offsetLeft - parseInt(getComputedStyle(scrollElement).paddingLeft || '0');
      const distance = Math.abs(cardLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Magnetic Button Effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    // Hitung jarak dari pusat tombol
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Gerakkan tombol mengikuti kursor (kekuatan magnet = 0.4)
    gsap.to(btn, {
      x: x * 0.4,
      y: y * 0.4,
      scale: 1.15,
      rotation: -10,
      background: '#fff',
      duration: 0.4,
      ease: 'power2.out'
    });

    // Gerakkan ikon panah di dalamnya lebih jauh untuk efek paralaks (lepas landas)
    const icon = btn.querySelector('svg');
    if (icon) {
      gsap.to(icon, { x: x * 0.2 + 4, y: y * 0.2 - 4, duration: 0.4, ease: 'power2.out' });
    }
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    // Kembali ke posisi semula dengan efek pegas (spring)
    gsap.to(btn, { x: 0, y: 0, scale: 1, rotation: 0, background: '', duration: 0.8, ease: 'elastic.out(1, 0.3)', clearProps: 'all' });

    const icon = btn.querySelector('svg');
    if (icon) {
      gsap.to(icon, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)', clearProps: 'all' });
    }
  };

  // 3D Card Parallax Tilt Effect
  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Normalize koordinat ke -1 sampai 1 dari pusat kartu
    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to(card, {
      y: -8, // Tetap terangkat seperti hover sebelumnya
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
    <div className={styles.container}>
      <div
        className={styles.grid}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`${styles.cardWrapper} ${index === activeIndex ? styles.cardActive : ''}`}
            onClick={() => setActiveIndex(index)}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
          >
            {/* .card menggunakan clip-path untuk bentuk kurva halus */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
            </div>

            {/* .actionBtn magnetic hover */}
            <button 
              className={styles.actionBtn}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className={styles.bottomControls}>
        <div className={styles.paginationDots}>
          {servicesData.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}