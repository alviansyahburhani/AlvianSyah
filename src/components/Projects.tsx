import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: "TB Masdar Utama (POS & Inventory)",
    desc: "Aplikasi kasir dan manajemen inventaris modern dengan fitur lengkap seperti manajemen stok otomatis, laporan keuangan, hingga pengiriman. Dibalut dengan antarmuka glassmorphism yang elegan dan responsif.",
    tags: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
    number: "01",
    image: "/images/tb-masdar-utama.webp"
  },
  {
    id: 2,
    title: "Koperasi Merah Putih",
    desc: "Sistem informasi web terintegrasi untuk mendigitalisasi administrasi koperasi. Mencakup fitur pencatatan 16 buku wajib koperasi, e-commerce hasil usaha, portal berita, dan galeri kegiatan.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Midtrans"],
    number: "02",
    image: "/images/koperasi-merah-putih.webp"
  },
  {
    id: 3,
    title: "ISPA Detect (Machine Learning)",
    desc: "Sistem deteksi dini risiko Infeksi Saluran Pernapasan Akut (ISPA) menggunakan teknik Ensemble Learning (Random Forest & XGBoost) untuk akurasi tinggi. Dibangun dengan backend FastAPI dan antarmuka Vue.js yang modern.",
    tags: ["Vue.js", "FastAPI", "Machine Learning", "Python"],
    number: "03",
    image: "/images/ispa-detect.webp"
  },
  {
    id: 4,
    title: "Dashboard INAPORTNET & DITKAPEL",
    desc: "Aplikasi dashboard interaktif untuk menarik (fetching), memproses, dan memvisualisasikan data kedatangan kapal dari sistem pelabuhan secara real-time. Terintegrasi dengan layanan Google Cloud secara aman.",
    tags: ["JavaScript", "REST API", "HTML/CSS", "Google Cloud"],
    number: "04",
    image: "/images/inaportnet-dashboard.webp"
  },
];

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.cardsWrapper}>
        {projectsData.map((project, i) => (
          <div
            key={project.id}
            className={styles.card}
            style={{ top: `calc(60px + ${i * 20}px)` }}
          >
            {project.image && (
              <div className={styles.cardBackgroundImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.imageOverlay}></div>
              </div>
            )}

            <div className={styles.cardNumber}>{project.number}</div>

            <div className={styles.cardContent}>
              <div className={styles.projectHeader}>

                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <button className={styles.viewButton}>
                    View Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
