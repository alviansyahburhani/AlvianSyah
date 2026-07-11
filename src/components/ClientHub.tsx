"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './ClientHub.module.css';
import MyServices from './MyServices';
import Projects from './Projects';
import WhyMe from './WhyMe';

export default function ClientHub() {
  const [activeTab, setActiveTab] = useState<'services' | 'projects' | 'whyMe'>('services');
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  useEffect(() => {
    // Recalculate pill position when tab changes or window resizes
    const updatePill = () => {
      const activeIndex = ['services', 'projects', 'whyMe'].indexOf(activeTab);
      const activeBtn = tabsRef.current[activeIndex];
      if (activeBtn) {
        setPillStyle({
          left: activeBtn.offsetLeft,
          top: activeBtn.offsetTop,
          width: activeBtn.offsetWidth,
          height: activeBtn.offsetHeight,
          opacity: 1
        });
      }
    };

    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeTab]);

  useEffect(() => {
    const handleTabSwitch = (e: CustomEvent) => {
      const newTab = e.detail;
      if (['services', 'projects', 'whyMe'].includes(newTab)) {
        setActiveTab(newTab as 'services' | 'projects' | 'whyMe');
      }
    };
    
    // Add event listener for custom event dispatched from Navbar
    window.addEventListener('switchTab', handleTabSwitch as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('switchTab', handleTabSwitch as EventListener);
    };
  }, []);

  return (
    <section className={styles.container} id="client-hub">
      <div className={styles.wrapper}>

        {/* Tabs Navigation */}
        <div className={styles.tabsHeader}>
          <div className={styles.activePill} style={pillStyle} />
          <button
            ref={(el) => { tabsRef.current[0] = el; }}
            className={`${styles.tabBtn} ${activeTab === 'services' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('services')}
          >
            My Services
          </button>
          <button
            ref={(el) => { tabsRef.current[1] = el; }}
            className={`${styles.tabBtn} ${activeTab === 'projects' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Project Showcase
          </button>
          <button
            ref={(el) => { tabsRef.current[2] = el; }}
            className={`${styles.tabBtn} ${activeTab === 'whyMe' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('whyMe')}
          >
            Why Me?
          </button>
        </div>
      </div> {/* Close the first wrapper here */}

      {/* Dynamic Content Area (Sekarang di luar wrapper agar bisa melebar penuh / edge-to-edge) */}
      <div className={styles.contentArea}>
        {activeTab === 'services' && <MyServices />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'whyMe' && (
          <div className={styles.wrapper} style={{ margin: '0 auto' }}>
            <WhyMe />
          </div>
        )}
      </div>
    </section>
  );
}
