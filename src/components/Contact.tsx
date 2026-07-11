"use client";

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Benturan Tipografi Masuk (Typographic Collision Reveal)
    gsap.fromTo('.gsap-title-left', 
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none reverse'
        }
      }
    );

    gsap.fromTo('.gsap-title-right', 
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none reverse'
        }
      }
    );

    // 2. Formulir Muncul Berurutan (Staggered Form Reveal)
    gsap.fromTo('.gsap-form-item', 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none reverse'
        }
      }
    );
  }, { scope: sectionRef });

  const handleWhatsApp = () => {
    const waNumber = "6285244736681"; // Nomor WhatsApp
    const text = "Halo Alvian, saya tertarik untuk mendiskusikan sebuah proyek dengan Anda.";
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // 3D Form Parallax Tilt Effect
  const handleFormMove = (e: React.MouseEvent<HTMLFormElement>) => {
    const formEl = e.currentTarget;
    const rect = formEl.getBoundingClientRect();

    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    gsap.to(formEl, {
      y: -5, // Sedikit terangkat
      rotationY: xNorm * 4, // Derajat lebih kecil agar tidak pusing saat mengetik
      rotationX: -yNorm * 4,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleFormLeave = (e: React.MouseEvent<HTMLFormElement>) => {
    const formEl = e.currentTarget;
    gsap.to(formEl, {
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)',
      clearProps: 'transform'
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Ganti URL di bawah ini dengan Endpoint URL dari Formspree Anda
      const response = await fetch('https://formspree.io/f/maqgrjda', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Mengosongkan form setelah berhasil

        // Kembalikan status ke idle setelah 5 detik (opsional)
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.container} id="contact" ref={sectionRef}>
      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <div className={styles.typography}>
            <h2 className={`${styles.titleOutline} gsap-title-left`}>LET'S WORK</h2>
            <h2 className={`${styles.titleSolid} gsap-title-right`}> TOGETHER</h2>
          </div>
          <p className={styles.description}>
            Punya proyek dalam pikiran atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
          </p>

          <div className={`${styles.directContact} gsap-title-left`}>
            <p className={styles.directContactText}>Atau butuh respon yang lebih cepat?</p>
            <button type="button" className={styles.whatsappDirectBtn} onClick={handleWhatsApp}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat via WhatsApp
            </button>
          </div>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onMouseMove={handleFormMove}
          onMouseLeave={handleFormLeave}
        >
          <div className={`${styles.inputGroup} gsap-form-item`}>
            <label htmlFor="name">Name</label>
            {/* Atribut 'name' sangat penting agar Formspree mengenali datanya */}
            <input type="text" name="name" id="name" placeholder="Your name" required />
          </div>
          <div className={`${styles.inputGroup} gsap-form-item`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email" required />
          </div>
          <div className={`${styles.inputGroup} gsap-form-item`}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4} placeholder="Your message" required></textarea>
          </div>

          <div className="gsap-form-item">
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Mengirim...' : 'Kirim Email'}
            </button>
          </div>

          {/* Notifikasi Status */}
          {status === 'success' && (
            <p style={{ color: '#B8CD86', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>
              Pesan berhasil terkirim! Saya akan segera membalasnya.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>
              Ups, terjadi kesalahan. Silakan coba lagi.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
