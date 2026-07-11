"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  {
    label: 'TECHSTACK', href: '#tech-stack', subLinks: [
      { label: 'Frontend', hash: 'frontend' },
      { label: 'Backend', hash: 'backend' },
      { label: 'Machine Learning', hash: 'ml' },
      { label: 'Tools', hash: 'tools' }
    ]
  },
  {
    label: 'EXPERTISE', href: '#client-hub', subLinks: [
      { label: 'My Services', hash: 'services' },
      { label: 'Project', hash: 'projects' },
      { label: 'Why Me?', hash: 'whyMe' }
    ]
  },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Simple and clean scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id="home"]');
      let current = '#home';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) { // Offset for navbar
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.activeHamburger : ''}`}
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div className={`${styles.menuWrapper} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.center}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={(e) => {
                    if (window.innerWidth <= 992 && link.subLinks) {
                      e.preventDefault();
                      setOpenSubMenu(openSubMenu === link.label ? null : link.label);
                    } else {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                      setOpenSubMenu(null);
                    }
                  }}
                >
                  {link.label}
                  {link.subLinks && (
                    <svg className={`${styles.dropdownArrow} ${openSubMenu === link.label ? styles.rotated : ''}`} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                  {activeLink === link.href && <span className={styles.activeIndicator} />}
                </Link>
                {link.subLinks && (
                  <div className={`${styles.dropdown} ${openSubMenu === link.label ? styles.dropdownOpen : ''}`}>
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.hash}
                        href={link.href}
                        className={styles.dropdownLink}
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('switchTab', { detail: subLink.hash }));
                          setActiveLink(link.href);
                          setIsMobileMenuOpen(false);
                          setOpenSubMenu(null);
                        }}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
